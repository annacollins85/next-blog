import styled from 'styled-components'

import { GRID_UNIT, BREAKPOINTS } from '../../constants/design'

export const BlogPostHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    flex-direction: row;
  }
`

export const BlogPostHeroImage = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: 50% 25%;

  &:hover {
    cursor: pointer;
  }
`

export const ImageWrap = styled.div`
  position: relative;
  order: 1;
  width: 100vw;
  min-height: 65vh;
  height: auto;
  margin-right: auto;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    order: 2;
    width: 50vw;
  }
`

export const InfoWrap = styled.div`
  order: 2;
  width: 100vw;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    order: 1;
    width: 50vw;
  }
`

export const BlogPostHeroInfo = styled.div`
  padding: 0 ${2 * GRID_UNIT}px ${3 * GRID_UNIT}px;
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    margin-left: auto;
    padding: ${14 * GRID_UNIT}px ${7 * GRID_UNIT}px ${9 * GRID_UNIT}px
      ${4 * GRID_UNIT}px;
    max-width: 512px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    padding: ${19 * GRID_UNIT}px ${10 * GRID_UNIT}px ${12 * GRID_UNIT}px
      ${2 * GRID_UNIT}px;
  }
`

export const BlogPostTitle = styled.h1`
  margin-top: ${3 * GRID_UNIT}px;
  font-size: 28px;
  font-weight: 600;
  line-height: 34px;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    margin-top: 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    font-size: 52px;
    line-height: 64px;
  }
`

export const BlogPostSubtitle = styled.p`
  max-width: 320px;
  font-family: 'Merriweather', serif;
  font-size: 16px;
  line-height: 28px;

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    max-width: 320px;
  }
`

export const ReleaseDate = styled.div`
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: ${2 * GRID_UNIT}px;
`
