import React, { Component } from 'react'

import { Element } from 'react-scroll'

import NotFound from '../components/not-found'
import HomeHero from '../components/home-hero'
import BlogPostsSection from '../components/blog-posts-section'

class Home extends Component {
  static getInitialProps({ query }) {
    return query
  }

  render() {
    const { __pageContent } = this.props

    if (!__pageContent) {
      return <NotFound />
    }

    const { intro, mainImage, blogPosts } = __pageContent

    return (
      <div>
        <HomeHero intro={intro} mainImage={mainImage} />
        <Element name="blogPostsSection">
          <BlogPostsSection blogPosts={blogPosts} />
        </Element>
      </div>
    )
  }
}

export default Home
