const Entry = require('./entry-model')

class HomePage extends Entry {
  get title() {
    return this.fields.title
  }

  toJSON() {
    return {
      contentType: super.contentType,
      title: this.title,
    }
  }
}

module.exports = HomePage
