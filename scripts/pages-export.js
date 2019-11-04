const blogPosts = require('../contentful-data/.data-blogposts.json')
const homePage = require('../contentful-data/.data-homepage.json')

const formatExportMap = ({ path, page, query }) => {
  return {
    [path]: {
      page,
      query,
    },
  }
}

const staticPagesExportMap = () => {
  let staticPages = {
    ...formatExportMap({
      page: '/home-page',
      path: '/',
      query: {
        __pageContent: homePage,
      },
    }),
    ...formatExportMap({
      page: '/_error',
      path: '/404.html',
      query: {
        order: -1,
      },
    }),
  }

  blogPosts.forEach(blogPost => {
    staticPages = {
      ...staticPages,
      ...formatExportMap({
        page: '/blog-post',
        path: `/blog/${blogPost.slug}`,
        query: {
          __pageContent: blogPost,
        },
      }),
    }
  })

  return staticPages
}

module.exports = staticPagesExportMap
