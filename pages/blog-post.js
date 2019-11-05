import React, { Component } from 'react'
import Head from 'next/head'

import NotFound from '../components/not-found'

class BlogPost extends Component {
  static getInitialProps({ query }) {
    return query
  }

  render() {
    const { __pageContent } = this.props

    if (!__pageContent) {
      return <NotFound />
    }

    return (
      <div>
        <Head>
          <title>BlogPost</title>
        </Head>
        HOLA
      </div>
    )
  }
}

export default BlogPost
