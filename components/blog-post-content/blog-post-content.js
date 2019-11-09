import React from 'react'
import PropTypes from 'prop-types'

import DropCap from '../drop-cap'
import MiscHtml from '../misc-html'

import { BlogPostContentContainer } from './styled-components'

const componentMap = {
  dropCapParagraph: DropCap,
}

const renderBlocks = ({ blocks = [], color }) => {
  return blocks.map((block, index) => {
    const BlockComponent = componentMap[block.contentType] || MiscHtml
    return (
      <BlockComponent
        color={color}
        content={block}
        key={index}
        router={router}
      />
    )
  })
}

const BlogPostContent = ({ content }) => {
  const { blocks, color } = content
  return (
    <BlogPostContentContainer>
      {renderBlocks({ blocks: blocks, color: color })}
    </BlogPostContentContainer>
  )
}

BlogPostContent.propTypes = {
  content: PropTypes.object.isRequired,
}

export default BlogPostContent
