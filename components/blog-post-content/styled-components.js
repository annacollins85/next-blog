import styled from 'styled-components'

import { GRID_UNIT, BREAKPOINTS } from '../../constants/design'

export const BlogPostContentContainer = styled.article`
  font-family: 'Merriweather', serif;
  margin: 0 0 ${8 * GRID_UNIT}px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    margin: ${6 * GRID_UNIT}px 0 ${8 * GRID_UNIT}px;
  }
`
