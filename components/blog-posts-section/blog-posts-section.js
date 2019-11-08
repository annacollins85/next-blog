import PropTypes from 'prop-types'

import BlogPostCard from './blog-post-card'
import {
  BlogPostsSectionContainer,
  BlogPostsSectionTitle,
  BlogPostCardsContainer,
} from './styled-components'

const BlogPost = ({ blogPosts }) => (
  <BlogPostsSectionContainer>
    <BlogPostsSectionTitle>Liked that? Check these out:</BlogPostsSectionTitle>
    <BlogPostCardsContainer>
      {blogPosts.map(post => (
        <BlogPostCard
          image={post.image}
          key={post.slug}
          // readTime={post.readTime}
          slug={post.slug}
          title={post.title}
        />
      ))}
    </BlogPostCardsContainer>
  </BlogPostsSectionContainer>
)

BlogPost.propTypes = {
  BlogPost: PropTypes.array,
}

export default BlogPost
