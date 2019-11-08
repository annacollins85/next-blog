import React from 'react'
import PropTypes from 'prop-types'

import CTA from '../cta'
import HighlightedLink from '../highlighted-link'
import Quote from '../quote'
import Video from '../video'
import Typeform from '../typeform'
import RawHtml from '../raw-html'
import DropCap from '../drop-cap'
import FullWidthImage from '../full-width-image'
import MiscHtml from '../misc-html'
import AuthorBio from '../author-bio'
import {
  AUTHOR_PROP_TYPES,
  RICH_TEXT_PROP_TYPES,
} from '../../constants/prop-types'

import { ArticleContentContainer } from './styled-components'

const componentMap = {
  cta: CTA,
  highlightedLink: HighlightedLink,
  quote: Quote,
  video: Video,
  typeform: Typeform,
  rawHtml: RawHtml,
  dropCapParagraph: DropCap,
  fullWidthImage: FullWidthImage,
}

const renderBlocks = ({ blocks = [], router, color }) => {
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

const ArticleContent = ({
  categoryColor,
  content,
  includeAuthorBio,
  author,
  router,
}) => {
  return (
    <ArticleContentContainer>
      {renderBlocks({ blocks: content.blocks, router, color: categoryColor })}
      {includeAuthorBio && <AuthorBio bio={author.bio} color={categoryColor} />}
    </ArticleContentContainer>
  )
}

ArticleContent.propTypes = {
  categoryColor: PropTypes.string.isRequired,
  content: RICH_TEXT_PROP_TYPES.isRequired,
  includeAuthorBio: PropTypes.bool.isRequired,
  author: AUTHOR_PROP_TYPES.isRequired,
  router: PropTypes.object.isRequired,
}

export default React.memo(ArticleContent)
