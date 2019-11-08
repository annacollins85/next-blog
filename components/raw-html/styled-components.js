import styled from 'styled-components'

import {
  ARTICLE_SECTION_HORIZONTAL_PADDING,
  ARTICLE_SECTION_WIDTH,
} from '../../constants/design'

export const RawHTMLSectionContainer = styled.div`
  margin: 0 auto;
  padding: ${ARTICLE_SECTION_HORIZONTAL_PADDING}px;
  max-width: ${ARTICLE_SECTION_WIDTH}px;

  > div {
    display: flex;
    justify-content: center;
  }
`
