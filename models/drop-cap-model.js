const Entry = require('./entry-model')

class DropCap extends Entry {
  get content () {
    return this.fields.content
  }

  toJSON () {
    return {
      contentType: super.contentType,
      content: this.content,
    }
  }
}

module.exports = DropCap
