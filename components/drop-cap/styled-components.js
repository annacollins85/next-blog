import styled from 'styled-components'

import {
  ARTICLE_SECTION_HORIZONTAL_PADDING,
  ARTICLE_SECTION_VERTICAL_PADDING,
  ARTICLE_SECTION_WIDTH,
} from '../../constants/design'

export const DropCapContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${ARTICLE_SECTION_HORIZONTAL_PADDING}px;
  max-width: ${ARTICLE_SECTION_WIDTH}px;

  p {
    padding: ${ARTICLE_SECTION_VERTICAL_PADDING}px 0;
    
    &:first-child {
      &::first-letter {
        float: left;
        color: ${props => props.color};
        font-size: 101px;
        line-height: 1;
        margin: -5px 10px -10px 0;
        font-family: Apercu, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
        font-weight: 700;
      }
    }
  }
`
