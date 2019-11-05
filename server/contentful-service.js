const contentful = require('contentful')

const modelsDefinition = require('../contentful-data/models-definition')
const contentTypes = Object.keys(modelsDefinition)

class ContentfulService {
  constructor({ space, accessToken, host }) {
    this.contentfulClient = contentful.createClient({
      space,
      accessToken,
      host,
    })

    this.blogPosts = []
    this.homePage = []
  }

  async getContent(contentType) {
    if (this[contentType].length) {
      return this[contentType]
    }

    const { contentfulKey, model: Model } = modelsDefinition[contentType]

    this[contentType] = await this.contentfulClient
      .getEntries({
        content_type: contentfulKey,
        include: 10,
      })
      .then(entries => (entries.total ? entries.items : []))
      .then(entries =>
        entries.map(entry => {
          try {
            return new Model(entry).toJSON()
          } catch (e) {
            throw new Error(e)
          }
        })
      )

    return this[contentType]
  }

  async getBlogPosts() {
    const blogPosts = await this.getContent('blogPosts')
    return blogPosts
  }

  async getBlogPost(slug) {
    const blogPosts = await this.getBlogPosts()
    return blogPosts.find(el => el.slug === slug)
  }

  async getHomePage() {
    const homePage = await this.getContent('homePage')
    return homePage[0]
  }

  async refreshPages() {
    return Promise.all(
      contentTypes.map(contentType => {
        this[contentType] = []
        this.getContent(contentType)
      })
    )
  }

  async getPageContent({ pageName, slug } = {}) {
    let pageContent = {}

    switch (pageName) {
      case 'blogPost':
        pageContent = await this.getBlogPost(slug)
        return pageContent
      default:
        pageContent = await this.getHomePage()
        return pageContent
    }
  }
}

const contentfulService = new ContentfulService({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
})

module.exports = {
  contentfulService,
}
