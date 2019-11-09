import styled from 'styled-components'

import {
  GRID_UNIT,
  BREAKPOINTS,
  BACKGROUND_COLOR,
} from '../../constants/design'

export const HomeHeroBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    flex-direction: row;
  }
`

export const IntroHeading = styled.h1`
  width: 320px;
  padding: ${4 * GRID_UNIT}px ${2 * GRID_UNIT}px ${2 * GRID_UNIT}px;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    padding: 0 0 0 ${4 * GRID_UNIT}px;
  }
`

export const Avatar = styled.img`
  max-width: 150px;
`
