const DropCap = require('./drop-cap-model')

class RichText {
  constructor(entry) {
    this.entry = entry
  }

  get blocks() {
    const blocks = this.entry.content || []
    try {
      return blocks.map(block => this.createBlockType(block))
    } catch (e) {
      console.log({ error: e })
      return []
    }
  }

  createBlockType(block) {
    if (block.nodeType !== 'embedded-entry-block') {
      // everything that is just HTML (paragraphs, hyperlinks) will be
      // handled by @contentful/rich-text-react-renderer library
      // (parsing done inside rich-text.js component)
      // embedded images are also handled there
      return block
    }
    const contentType = block.data.target.sys.contentType.sys.id
    switch (contentType) {
      case 'dropCapParagraph':
        return new DropCap(block.data.target).toJSON()
      default:
        return {}
    }
  }

  toJSON() {
    return {
      contentType: 'Rich Text',
      blocks: this.blocks,
    }
  }
}

module.exports = RichText
