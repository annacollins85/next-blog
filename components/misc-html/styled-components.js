import styled from 'styled-components'

import {
  ARTICLE_COLUMN_WIDTH,
  ARTICLE_SECTION_HORIZONTAL_PADDING,
  ARTICLE_SECTION_VERTICAL_PADDING,
  ARTICLE_SECTION_WIDTH,
  TEXT_COLOR_PRIMARY,
} from '../../constants/design'

export const ImageContainer = styled.div`
  max-width: ${ARTICLE_SECTION_WIDTH}px;
  padding: ${ARTICLE_SECTION_HORIZONTAL_PADDING}px;
  margin: 0 auto;
`

export const StyledImage = styled.img`
  max-width: 100%;
  text-align: right;

  @media screen and (min-width: 768px) {
    max-width: ${ARTICLE_COLUMN_WIDTH}px;
  }
`

export const MiscHtmlContainer = styled.div`
  > p,
  h2,
  h3,
  h4,
  ul,
  ol {
    margin: 0 auto;
    max-width: ${ARTICLE_SECTION_WIDTH}px;
  }

  > p,
  h3,
  h4 {
    padding: ${ARTICLE_SECTION_VERTICAL_PADDING}px
      ${ARTICLE_SECTION_HORIZONTAL_PADDING}px;
  }

  p {
    font-size: 18px;
    line-height: 30px;
  }

  h2,
  h3 {
    font-family: Apercu, -apple-system, BlinkMacSystemFont, Helvetica Neue,
      sans-serif;
    font-weight: 500;
    line-height: 40px;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
  }

  h3 {
    font-size: 22px;

    @media screen and (min-width: 480px) {
      font-size: 30px;
    }
  }

  h2 {
    font-size: 26px;
    padding: ${ARTICLE_SECTION_HORIZONTAL_PADDING}px;

    @media screen and (min-width: 480px) {
      font-size: 36px;
    }
  }

  ul,
  ol {
    padding: ${ARTICLE_SECTION_VERTICAL_PADDING}px
      ${2 * ARTICLE_SECTION_HORIZONTAL_PADDING}px;
  }

  a {
    border-bottom: 2px solid;
    border-color: ${props => props.color};

    &:hover {
      transition: 0.5s;
      background-color: ${props => props.color};
      color: ${TEXT_COLOR_PRIMARY};
    }
  }
`
