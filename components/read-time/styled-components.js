import styled from 'styled-components'

import { GRID_UNIT } from '../../constants/design'

export const ReadTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${2 * GRID_UNIT};
`

export const ReadTimeText = styled.div`
  white-space: nowrap;
  margin-left: ${GRID_UNIT}px;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: 2px solid;
`
