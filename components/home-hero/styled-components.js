import styled, { keyframes } from 'styled-components'

import { GRID_UNIT, BREAKPOINTS } from '../../constants/design'

export const HomeHeroBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    flex-direction: row;
  }
`

export const IntroHeading = styled.h1`
  padding: ${4 * GRID_UNIT}px ${GRID_UNIT}px ${2 * GRID_UNIT}px;
  width: 330px;
  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    padding: 0 0 0 ${4 * GRID_UNIT}px;
    text-align: left;
  }
`

export const Avatar = styled.img`
  max-width: 150px;
`

export const ScrollArrowContainer = styled.div`
  justify-self: flex-end;
`

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-30px);}
  60% {transform: translateY(-15px);}
`

export const ScrollArrow = styled.div`
  font-size: 32px;
  padding-bottom: ${2 * GRID_UNIT}px;
  animation: ${bounce};
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;

  &:hover {
    cursor: pointer;
  }
`
