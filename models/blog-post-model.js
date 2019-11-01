const Entry = require('./entry-model')

class BlogPost extends Entry {
  get title() {
    return this.fields.title
  }

  get slug() {
    return this.fields.slug
  }

  toJSON() {
    return {
      contentType: super.contentType,
      title: this.title,
      slug: this.slug,
    }
  }
}

module.exports = BlogPost
