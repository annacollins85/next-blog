import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import Head from 'next/head'

import NotFound from '../components/not-found'

class Home extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
  }

  render() {
    const { __pageContent } = this.props.router.query

    console.log(this.props.router)

    if (!__pageContent) {
      return <NotFound />
    }

    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        HOLA
      </div>
    )
  }
}

export default withRouter(Home)
