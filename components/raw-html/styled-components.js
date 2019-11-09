import styled from 'styled-components'

import {
  BLOG_POST_SECTION_HORIZONTAL_PADDING,
  BLOG_POST_SECTION_WIDTH,
} from '../../constants/design'

export const RawHTMLSectionContainer = styled.div`
  margin: 0 auto;
  padding: ${BLOG_POST_SECTION_HORIZONTAL_PADDING}px;
  max-width: ${BLOG_POST_SECTION_WIDTH}px;

  > div {
    display: flex;
    justify-content: center;
  }
`
