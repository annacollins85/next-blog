import React, { Component } from 'react'

import NotFound from '../components/not-found'
import BlogPostHero from '../components/blog-post-hero'

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
      title,
      releaseDate,
      subtitle,
      image,
      content,
      readTime,
    } = __pageContent

    return (
      <>
        <BlogPostHero
          title={title}
          subtitle={subtitle}
          image={image}
          readTime={readTime.text}
          releaseDate={releaseDate}
        />
      </>
    )
  }
}

export default BlogPost
