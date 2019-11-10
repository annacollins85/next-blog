import styled from 'styled-components'

import { BREAKPOINTS } from '../../constants/design'

import {
  BLOG_POST_COLUMN_WIDTH,
  BLOG_POST_SECTION_HORIZONTAL_PADDING,
  BLOG_POST_SECTION_VERTICAL_PADDING,
  BLOG_POST_SECTION_WIDTH,
  LINK_COLOR_HOVER,
} from '../../constants/design'

export const ImageContainer = styled.div`
  max-width: ${BLOG_POST_SECTION_WIDTH}px;
  padding: ${BLOG_POST_SECTION_HORIZONTAL_PADDING}px;
  margin: 0 auto;
`

export const StyledImage = styled.img`
  width: 100%;
  text-align: right;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    max-width: ${BLOG_POST_COLUMN_WIDTH}px;
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
    max-width: ${BLOG_POST_SECTION_WIDTH}px;
  }

  > p,
  h3,
  h4 {
    padding: ${BLOG_POST_SECTION_VERTICAL_PADDING}px
      ${BLOG_POST_SECTION_HORIZONTAL_PADDING}px;
  }

  p {
    font-size: 18px;
    line-height: 30px;
  }

  h2,
  h3 {
    font-family: Helvetica Neue, sans-serif;
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

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
      font-size: 30px;
    }
  }

  h2 {
    font-size: 26px;
    padding: ${BLOG_POST_SECTION_HORIZONTAL_PADDING}px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
      font-size: 36px;
    }
  }

  ul,
  ol {
    padding: ${BLOG_POST_SECTION_VERTICAL_PADDING}px
      ${2 * BLOG_POST_SECTION_HORIZONTAL_PADDING}px;
  }

  a {
    border-bottom: 2px solid;
    border-color: ${props => props.color};

    &:hover {
      transition: 0.5s;
      background-color: ${props => props.color};
      color: ${LINK_COLOR_HOVER};
    }
  }
`
