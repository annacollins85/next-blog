const Entry = require('./entry-model')
const BlogPost = require('./blog-post-model')
const Image = require('./image-model')

class HomePage extends Entry {
  get intro() {
    return this.fields.intro
  }

  get mainImage() {
    return this.fields.mainImage
      ? new Image(this.fields.mainImage).toJSON()
      : {}
  }

  get blogPosts() {
    const blogPosts = this.fields.blogPosts || []
    try {
      return blogPosts.map(blogPost => new BlogPost(blogPost).toJSON())
    } catch (e) {
      console.error(e)
      return []
    }
  }

  toJSON() {
    return {
      contentType: super.contentType,
      intro: this.intro,
      mainImage: this.mainImage,
      blogPosts: this.blogPosts,
    }
  }
}

module.exports = HomePage
