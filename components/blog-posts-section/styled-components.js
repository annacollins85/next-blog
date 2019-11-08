import styled from 'styled-components'

import {
  GRID_UNIT,
  TEXT_COLOR_SECONDARY,
  BOX_SHADOW_COLOR,
  RELATED_ARTICLES_BACKGROUND_COLOR,
} from '../../constants/design'

export const BlogPostsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${8 * GRID_UNIT}px 0 ${8 * GRID_UNIT}px;
  background-color: #f8f8f5;
`

export const BlogPostsSectionTitle = styled.h3`
  font-size: 24px;
  text-align: center;
  line-height: 48px;
  margin-bottom: ${4 * GRID_UNIT}px;

  @media screen and (min-width: 480px) {
    font-size: 28px;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const BlogPostCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`

export const BlogPostCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 304px;
  min-height: 352px;
  margin: ${2 * GRID_UNIT}px;
  /* border-radius: 4px; */
  box-shadow: -6px 12px 50px -10px ${BOX_SHADOW_COLOR};

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: translateY(-0.5px) translateX(0.5px);
    box-shadow: -6px 12px 25px -5px ${BOX_SHADOW_COLOR};
  }
`

export const BlogPostImage = styled.div`
  height: 50%;
  /* border-radius: 4px 4px 0 0; */
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
`

export const BlogPostInfo = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: space-between;
  padding: ${3 * GRID_UNIT}px ${4 * GRID_UNIT}px;
  font-weight: 600;
`

export const BlogPostTitle = styled.div`
  margin: 0;
  padding: ${GRID_UNIT}px 0 ${2 * GRID_UNIT}px;
  line-height: 21px;
  color: ${TEXT_COLOR_SECONDARY};
`
