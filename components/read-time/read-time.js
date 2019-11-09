import React from 'react'
import PropTypes from 'prop-types'

import {
  TEXT_COLOR_PRIMARY,
  RELATED_ARTICLES_AUTHOR_TEXT_COLOR,
  MAIN_COLOR,
} from '../../constants/design'

import { ReadTimeText, ReadTimeContainer } from './styled-components'

const getColor = ({ image, inHero }) => {
  if (image) return TEXT_COLOR_PRIMARY
  if (inHero) return MAIN_COLOR
  return RELATED_ARTICLES_AUTHOR_TEXT_COLOR
}

const getBorder = ({ image, inHero }) => {
  if (inHero && image) return `2px solid ${TEXT_COLOR_PRIMARY}`
  if (inHero) return `2px solid ${MAIN_COLOR}`
  return 'none'
}

const ReadTime = ({ image, readTime, inHero }) => {
  const color = getColor({ image, inHero })
  const border = getBorder({ image, inHero })

  return (
    <ReadTimeContainer color={color} inHero={inHero}>
      <svg
        height='14'
        viewBox='0 0 24 24'
        width='14'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z' />
      </svg>
      <ReadTimeText border={border}>{readTime}</ReadTimeText>
    </ReadTimeContainer>
  )
}

ReadTime.propTypes = {
  image: PropTypes.string,
  readTime: PropTypes.string.isRequired,
  inHero: PropTypes.bool,
}

export default ReadTime
