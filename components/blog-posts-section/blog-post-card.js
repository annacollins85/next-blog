import PropTypes from 'prop-types'
import Link from 'next/link'

// import ReadTimeWithAuthor from '../read-time/read-time-with-author'

import {
  BlogPostCardContainer,
  BlogPostImage,
  BlogPostInfo,
  BlogPostTitle,
} from './styled-components'

const BlogPostCard = ({ image, slug, title }) => {
  return (
    <Link href={`/blog/${slug}/`}>
      <BlogPostCardContainer>
        <BlogPostImage image={image.url} />
        <BlogPostInfo>
          <BlogPostTitle>{title}</BlogPostTitle>
          {/* <ReadTimeWithAuthor author={author} readTime={readTime} /> */}
        </BlogPostInfo>
      </BlogPostCardContainer>
    </Link>
  )
}

BlogPostCard.propTypes = {
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogPostCard
