import React from 'react'
import PropTypes from 'prop-types'

import { IMAGE_PROP_TYPES } from '../../constants/prop-types'

import BlogPostCard from './blog-post-card'
import {
  BlogPostsSectionContainer,
  BlogPostsSectionTitle,
  BlogPostCardsContainer,
} from './styled-components'

const BlogPost = ({ blogPosts }) => (
  <BlogPostsSectionContainer>
    <BlogPostsSectionTitle>Blog Posts ✍🏻</BlogPostsSectionTitle>
    <BlogPostCardsContainer>
      {blogPosts.map(post => (
        <BlogPostCard
          imageUrl={post.image.url}
          key={post.slug}
          readTime={post.readTime.text}
          slug={post.slug}
          title={post.title}
        />
      ))}
    </BlogPostCardsContainer>
  </BlogPostsSectionContainer>
)

BlogPost.propTypes = {
  BlogPost: PropTypes.shape({
    image: IMAGE_PROP_TYPES,
    readTime: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default BlogPost
