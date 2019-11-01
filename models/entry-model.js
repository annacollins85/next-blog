class Entry {
  constructor (entry) {
    this.entry = entry
  }

  get fields () {
    return this.entry.fields || {}
  }

  get contentTypeMeta () {
    return this.entry.sys.contentType
  }

  get contentType () {
    if (this.contentTypeMeta.sys.linkType !== 'ContentType') return null
    return this.contentTypeMeta.sys.id
  }

  toJSON () {
    return {
      fields: this.fields,
      contentType: this.contentType,
    }
  }
}

module.exports = Entry
