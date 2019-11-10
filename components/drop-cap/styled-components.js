import styled from 'styled-components'

import {
  BLOG_POST_SECTION_HORIZONTAL_PADDING,
  BLOG_POST_SECTION_VERTICAL_PADDING,
  BLOG_POST_SECTION_WIDTH,
} from '../../constants/design'

export const DropCapContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${BLOG_POST_SECTION_HORIZONTAL_PADDING}px;
  max-width: ${BLOG_POST_SECTION_WIDTH}px;

  p {
    padding: ${BLOG_POST_SECTION_VERTICAL_PADDING}px 0;

    &:first-child {
      &::first-letter {
        float: left;
        color: ${props => props.color};
        font-size: 101px;
        line-height: 1;
        margin: -5px 10px -10px 0;
        font-family: Helvetica Neue, sans-serif;
        font-weight: 700;
      }
    }
  }
`
