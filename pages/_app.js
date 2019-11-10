import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'

import GlobalStyles from '../components/common/global-styles'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <Head>
          <title>Anna's Blog</title>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    )
  }
}

export default MyApp
