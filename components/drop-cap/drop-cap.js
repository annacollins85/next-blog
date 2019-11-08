import React from 'react'

import { DROP_CAP_PROPTYPES } from '../../constants/prop-types'
import MiscHtml from '../misc-html'

import {
  DropCapContainer,
} from './styled-components'

const DropCap = ({ content, color }) => {
  const { content: dropCapContent } = content

  return (
    <DropCapContainer color={color}>
      <MiscHtml color={color} content={dropCapContent} />
    </DropCapContainer>
  )
}

DropCap.propTypes = DROP_CAP_PROPTYPES

export default DropCap
