const Entry = require('./entry-model')

class Image extends Entry {
  get asset() {
    return this.fields.file
  }

  get url() {
    return this.asset.url
  }

  get contentType() {
    return this.asset.contentType
  }

  get title() {
    return this.fields.title
  }

  toJSON() {
    return {
      title: this.title,
      contentType: this.contentType,
      url: this.url,
    }
  }
}

module.exports = Image
