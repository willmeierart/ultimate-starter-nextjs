import NextRouter from 'next/router'
import { Router } from './routes'
import IS_SSR from '../../lib/globals'

// because next-url-prettifier doesn't have imperative routing, this is the solution:

const ImperativeRouter = {
  push: (path, query, shallow /* (bool) */) => {
    console.log(NextRouter)
    if (!IS_SSR) {
      NextRouter.push(
        {
          pathname: `/${path}`,
          query: query
        },
        Router.linkPage(path, query).as,
        { shallow }
      )
    }
  },
  onRouteChangeComplete: cb => {
    if (!IS_SSR) {
      NextRouter.router.events.on('routeChangeComplete', cb)
    }
  }
}

export default ImperativeRouter
