import styled from 'styled-components'

import {
  GRID_UNIT,
  BREAKPOINTS,
  BOX_SHADOW_COLOR,
} from '../../constants/design'

import {
  BLOG_POST_SECTION_HORIZONTAL_PADDING,
  BLOG_POST_SECTION_WIDTH,
} from '../../constants/design'

export const BlogPostsSectionContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${BLOG_POST_SECTION_HORIZONTAL_PADDING}px ${15 * GRID_UNIT}px;
  max-width: ${BLOG_POST_SECTION_WIDTH}px;
  min-height: 100vh;
`

export const BlogPostsSectionTitle = styled.h3`
  align-self: flex-start;
  padding-top: ${4 * GRID_UNIT}px;
  margin: 0;
  font-size: 24px;
  line-height: 48px;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    font-size: 28px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    font-size: 32px;
  }
`

export const BlogPostCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const BlogPostCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  margin-top: ${4 * GRID_UNIT}px;
  width: 262px;
  min-height: 352px;
  box-shadow: -6px 12px 50px -10px ${BOX_SHADOW_COLOR};

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: translateY(-0.5px) translateX(0.5px);
    box-shadow: -6px 12px 25px -5px ${BOX_SHADOW_COLOR};
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}px) {
    width: 304px;
  }
`

export const BlogPostImage = styled.div`
  height: 176px;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
`

export const BlogPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 176px;
  padding: ${3 * GRID_UNIT}px ${4 * GRID_UNIT}px;
  font-weight: 600;
`

export const BlogPostTitle = styled.div`
  margin: 0;
  padding: ${GRID_UNIT}px 0 ${2 * GRID_UNIT}px;
  line-height: 21px;
`
