const Entry = require('./entry-model')
const Image = require('./image-model')
const RichText = require('./rich-text-model')

const {
  documentToPlainTextString,
} = require('@contentful/rich-text-plain-text-renderer')
const readingTime = require('reading-time')
const formatDate = require('../utils/date-formatter')

class BlogPost extends Entry {
  get title() {
    return this.fields.title
  }

  get slug() {
    return this.fields.slug
  }

  get color() {
    return this.fields.color
  }

  get releaseDate() {
    return this.fields.releaseDate ? formatDate(this.fields.releaseDate) : ''
  }

  get subtitle() {
    return this.fields.subtitle
  }

  get image() {
    return this.fields.image ? new Image(this.fields.image).toJSON() : {}
  }

  get content() {
    return this.fields.content ? new RichText(this.fields.content).toJSON() : {}
  }

  get readTime() {
    return this.fields.content
      ? readingTime(documentToPlainTextString(this.fields.content))
      : {}
  }

  toJSON() {
    return {
      contentType: super.contentType,
      title: this.title,
      slug: this.slug,
      color: this.color,
      releaseDate: this.releaseDate,
      subtitle: this.subtitle,
      image: this.image,
      content: this.content,
      readTime: this.readTime,
    }
  }
}

module.exports = BlogPost
