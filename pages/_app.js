import React, { Component } from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { Provider } from 'react-redux'
import withReduxStore from '../lib/redux/withReduxStore'
import Layout from '../components/layout'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }
  componentDidCatch (error, errorInfo) {
    console.log('CUSTOM ERROR HANDLING', error)
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <PageTransition timeout={300} classNames='page-transition'>
              <Component {...pageProps} />
            </PageTransition>
          </Layout>
        </Provider>
        <style jsx global>{`
            body {
              height: 100vh;
              width: 100vw;
              box-sizing: border-box;
            }
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
            a {
              text-decoration: none;
              color: inherit;
            }
            li {
              list-style: none;
            }
          `}</style>
        {/* <style dangerouslySetInnerHTML={{ __html: globalStyles }} /> */}
      </Container>
    )
  }
}

export default withReduxStore(MyApp)