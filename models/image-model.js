const Entry = require('./entry-model')

class Image extends Entry {
  get asset () {
    return this.fields.file
  }

  get url () {
    return this.asset.url
  }

  get width () {
    return this.asset.details.image.width
  }

  get height () {
    return this.asset.details.image.height
  }

  get contentType () {
    return this.asset.contentType
  }

  get description () {
    return this.fields.description
  }

  toJSON () {
    return {
      description: this.description,
      width: this.width,
      height: this.height,
      contentType: this.contentType,
      url: this.url,
    }
  }
}

module.exports = Image
