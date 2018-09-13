import NextRouter from 'next/router'
import { Router } from './routes'

// because next-url-prettifier doesn't have imperative routing, this is the solution:

const ImperativeRouter = {
  push: (path, query, shallow /* (bool) */) =>
    NextRouter.push(
      {
        pathname: `/${path}`,
        query: query
      },
      Router.linkPage(path, query).as,
      { shallow }
    ),
  onRouteChangeComplete: cb => {
    console.log(NextRouter)
    NextRouter.router.events.on('routeChangeComplete', cb)
  }
}

export default ImperativeRouter
