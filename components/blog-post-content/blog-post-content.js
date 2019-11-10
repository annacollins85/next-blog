import React from 'react'
import PropTypes from 'prop-types'

import { RICH_TEXT_PROP_TYPES } from '../../constants/prop-types'

import DropCap from '../drop-cap'
import MiscHtml from '../misc-html'

import { BlogPostContentContainer } from './styled-components'

const componentMap = {
  // Here we would have all the custom rich text entry types,
  // in this case only one but we can create as many as needed
  dropCapParagraph: DropCap,
}

const renderBlocks = ({ blocks = [], color }) => {
  return blocks.map((block, index) => {
    const BlockComponent = componentMap[block.contentType] || MiscHtml
    return <BlockComponent color={color} content={block} key={index} />
  })
}

const BlogPostContent = ({ content, color }) => {
  return (
    <BlogPostContentContainer>
      {renderBlocks({ blocks: content.blocks, color })}
    </BlogPostContentContainer>
  )
}

BlogPostContent.propTypes = {
  content: RICH_TEXT_PROP_TYPES.isRequired,
  color: PropTypes.string.isRequired,
}

export default BlogPostContent
