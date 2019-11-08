import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { NODE_PROP_TYPES } from '../../constants/prop-types'

import {
  ImageContainer,
  StyledImage,
  MiscHtmlContainer,
} from './styled-components'

const isEmbeddedImage = nodeData =>
  get(nodeData, `target.fields.file.contentType`, '').includes('image')

// Used to render images as by default images are not rendered
const documentParseOptions = {
  renderNode: {
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (isEmbeddedImage(node.data)) {
        const imageData = get(node, 'data.target.fields', '')

        // Use webp when possible
        if (['image/png', 'image/jpg'].includes(imageData.file.contentType)) {
          return (
            <ImageContainer>
              <picture>
                <source
                  srcSet={`${imageData.file.url}?fm=webp`}
                  type="image/webp"
                />
                <source
                  srcSet={imageData.file.url}
                  type={imageData.file.contentType}
                />
                <StyledImage
                  alt={imageData.description}
                  src={imageData.file.url}
                />
              </picture>
            </ImageContainer>
          )
        } else {
          return (
            <ImageContainer>
              <StyledImage
                alt={imageData.description}
                src={imageData.file.url}
              />
            </ImageContainer>
          )
        }
      }
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const linkHref = get(node, 'data.uri', null)

      if (linkHref) {
        return (
          <a href={linkHref} target={'blank'}>
            {children}
          </a>
        )
      }
    },
  },
}

const MiscHtml = ({ content = {}, color = 'black' }) => {
  const transformedContent = useMemo(
    () => documentToReactComponents(content, documentParseOptions),
    [content]
  )

  return (
    <MiscHtmlContainer color={color}>{transformedContent}</MiscHtmlContainer>
  )
}

MiscHtml.propTypes = {
  content: NODE_PROP_TYPES.isRequired,
  color: PropTypes.string,
}

export default React.memo(MiscHtml)
