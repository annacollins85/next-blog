import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import ReadTime from './read-time'
import {
  ReadTimeWithAuthorContainer,
  Author,
  AuthorLink,
  AuthorText,
} from './styled-components'

const ReadTimeWithAuthor = ({ author, authorSlug, readTime }) => (
  <ReadTimeWithAuthorContainer>
    <Author>
      By
      {authorSlug ? (
        <Link href={`/${authorSlug}/`}>
          <AuthorLink>{author}</AuthorLink>
        </Link>
      ) : (
        <AuthorText>{author}</AuthorText>
      )}
    </Author>
    <ReadTime readTime={readTime} />
  </ReadTimeWithAuthorContainer>
)

ReadTimeWithAuthor.propTypes = {
  readTime: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorSlug: PropTypes.string,
}

export default ReadTimeWithAuthor
