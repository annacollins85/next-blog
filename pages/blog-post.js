import React, { Component } from 'react'

import NotFound from '../components/not-found'
import BlogPostHero from '../components/blog-post-hero'
import BlogPostContent from '../components/blog-post-content/blog-post-content'

class BlogPost extends Component {
  static getInitialProps({ query }) {
    return query
  }

  render() {
    const { __pageContent } = this.props

    if (!__pageContent) {
      return <NotFound />
    }

    const {
      color,
      content,
      image,
      readTime,
      releaseDate,
      subtitle,
      title,
    } = __pageContent

    return (
      <>
        <BlogPostHero
          image={image}
          readTime={readTime.text}
          releaseDate={releaseDate}
          subtitle={subtitle}
          title={title}
        />
        <BlogPostContent color={color} content={content} />
      </>
    )
  }
}

export default BlogPost
