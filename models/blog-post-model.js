const Entry = require('./entry-model')
const Image = require('./image-model')

class BlogPost extends Entry {
  get title() {
    return this.fields.title
  }

  get slug() {
    return this.fields.slug
  }

  get image() {
    return this.fields.image ? new Image(this.fields.image).toJSON() : {}
  }

  toJSON() {
    return {
      contentType: super.contentType,
      title: this.title,
      slug: this.slug,
      image: this.image,
    }
  }
}

module.exports = BlogPost
