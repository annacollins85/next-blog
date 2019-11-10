import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import ReadTime from '../read-time'

import {
  BlogPostCardContainer,
  BlogPostImage,
  BlogPostInfo,
  BlogPostTitle,
} from './styled-components'

const BlogPostCard = ({ imageUrl, readTime, slug, title }) => {
  return (
    <Link href={`/blog/${slug}/`}>
      <BlogPostCardContainer>
        <BlogPostImage image={imageUrl} />
        <BlogPostInfo>
          <BlogPostTitle>{title}</BlogPostTitle>
          <ReadTime readTime={readTime} />
        </BlogPostInfo>
      </BlogPostCardContainer>
    </Link>
  )
}

BlogPostCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogPostCard
