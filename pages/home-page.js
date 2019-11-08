import React, { Component } from 'react'

import NotFound from '../components/not-found'
import HomeHero from '../components/home-hero'

class Home extends Component {
  static getInitialProps({ query }) {
    return query
  }

  render() {
    const { __pageContent } = this.props

    if (!__pageContent) {
      return <NotFound />
    }

    const { intro, image, blogPosts } = __pageContent

    return (
      <div>
        <HomeHero intro={intro} image={image} />
        {/* <BlogPostsSection blogPosts={blogPosts} /> */}
      </div>
    )
  }
}

export default Home
