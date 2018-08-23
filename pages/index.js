// import { graphql, compose } from 'react-apollo'
// import Loader from 'react-loaders'
// import withData from '../lib/apollo/withData'
import React, { Component } from 'react'
import { AzLogo01 } from '../components/assets/ZeroLogos'
import Head from '../components/Head'
// import fetch from 'isomorphic-fetch'

// include boilerplate for global loader dependent on graphql req's:
export default class HomePage extends Component {
  // static async getInitialProps () {
    // const API_URL = ''
    // const res = await fetch(API_URL)
    // const json = await res.json()
    // const { thing } = json
    // return thing
  // }
  render () {
    return (
      <main>
        <Head title='Home' />
        <section>
          {/* {allThings1.loading || allThings2.loading ? (
            <div className='loader-wrapper'>
              <Loader type='line-spin-fade-loader' active />
            </div>
          ) : ( */}
          <AzLogo01 />
          {/* )} */}
        </section>
        <style jsx>{`
            {/* .loader-wrapper {
              width:100%; height:100%;
              display: flex; justify-content: center; align-items:center;
            } */}
        `}</style>
      </main>
    )
  }
}

// example of GraphQL with multiple queries composed:
// export default withData(
//   compose(
//     graphql(allThings1, { name: 'allThings1' }),
//     graphql(allThings2, { name: 'allThings2' })
//   )(HomePage)
// )
