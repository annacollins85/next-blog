const BlogPostModel = require('../models/blog-post-model')
const HomePageModel = require('../models/home-page-model')

module.exports = {
  blogPosts: {
    contentfulKey: 'blogPost',
    model: BlogPostModel,
  },
  homePage: {
    contentfulKey: 'homePage',
    model: HomePageModel,
  },
}
