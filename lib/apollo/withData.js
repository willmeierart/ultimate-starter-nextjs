import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import initApollo from './initApollo'

export default App => {
  return class Apollo extends Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps (ctx) {
      const { Component, router } = ctx
      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      const apollo = initApollo()
      if (!process.browser) {
        try {
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          )
        } catch (error) {
          console.error('Error while running `getDataFromTree`', error)
        }
        Head.rewind()
      }

      return {
        ...appProps,
        apolloState: apollo.cache.extract()
      }
    }

    constructor (props) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }
    
    render () {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}