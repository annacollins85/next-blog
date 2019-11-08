import React from 'react'

import { RAW_HTML_PROP_TYPES } from '../../constants/prop-types'

import { RawHTMLSectionContainer } from './styled-components'

const RawHTMLSection = ({ content }) => {
  const { html } = content
  /* eslint-disable react/no-danger */
  return (
    <RawHTMLSectionContainer>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </RawHTMLSectionContainer>
  )
  /* eslint-enable react/no-danger */
}

RawHTMLSection.propTypes = RAW_HTML_PROP_TYPES

export default React.memo(RawHTMLSection)
