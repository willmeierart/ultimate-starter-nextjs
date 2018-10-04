// import { graphql, compose } from 'react-apollo'
// import Loader from 'react-loaders'
// import withData from '../lib/apollo/withData'
import React, { Component } from 'react'
import Head from '../components/Head'
import { AzLogo01 } from '../components/__assets/ZeroLogos'
// import ExampleWorker from '../lib/workers/example.worker'
// import fetch from 'isomorphic-fetch'

// include boilerplate for many possible features:

class HomePage extends Component {
  // static async getInitialProps () {
    // const API_URL = ''
    // const res = await fetch(API_URL)
    // const json = await res.json()
    // const { thing } = json
    // return thing
  // }
  // constructor (props) {
  //   super(props)
  //   this.state = { workerMessage: '' }
  // }

  // componentDidMount () {
  //   //example webworker
  //   this.worker = newExampleWorker()
  //   this.worker.postMessage('from Host')
  //   this.worker.addEventListener('message', this.onWorkerMessage)
  // }

  // componentWillUnmount () {
  //   this.worker.terminate()
  // }

  // onWorkerMessage = event => {
  //   this.setState({ workerMessage: event.data })
  // }

  componentDidCatch () {
    console.log('CUSTOM ERROR HANDLING', error)
  }

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
          .loader-wrapper {
            width:100%; height:100%;
            display: flex;
            justify-content: center;
            align-items:center;
          }
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
export default HomePage