import styled from 'styled-components'

import {
  GRID_UNIT,
  RELATED_ARTICLES_AUTHOR_TEXT_COLOR,
} from '../../constants/design'

export const ReadTimeContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  padding-top: ${2 * GRID_UNIT};

  svg {
    fill: ${props => props.color};
  }
`

export const ReadTimeText = styled.div`
  white-space: nowrap;
  margin-left: ${GRID_UNIT}px;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: ${props => props.border};
`

export const ReadTimeWithAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: none;
  font-size: 12px;
  color: ${RELATED_ARTICLES_AUTHOR_TEXT_COLOR};
`

export const Author = styled.div`
  display: flex;
  border-right: 1px solid ${RELATED_ARTICLES_AUTHOR_TEXT_COLOR};
  padding-right: ${GRID_UNIT}px;
  margin-right: ${GRID_UNIT}px;
  font-weight: 500;
  white-space: nowrap;
`

export const AuthorLink = styled.a`
  padding-left: ${0.5 * GRID_UNIT}px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`

export const AuthorText = styled.div`
  padding-left: ${0.5 * GRID_UNIT}px;
`
