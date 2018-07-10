import React from 'react'
import App, { Container } from 'next/app'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return <div className='layout'>
      {children}
    </div>
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
          a {
            text-decoration: none;
            color: inherit;
          }
          li {
            list-style: none;
          }
          body {
            height: 100vh;
            width: 100vw;
            box-sizing: border-box;
          }
        `}</style>
      {/* <style dangerouslySetInnerHTML={{ __html: globalStyles }} /> */}
    </Container>
  }
}