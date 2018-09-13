const express = require('express')
const next = require('next')
const compression = require('compression')
const Router = require('./routes').Router

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 3000
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express().use(compression()) // just an express server

    Router.forEachPattern((page, pattern, defaultParams) => // this function comes from next-url-prettifier
      server.get(pattern, (req, res) => {
        // console.log('\x1b[36m%s\x1b[0m', JSON.stringify(req.params))
        // console.log('\x1b[35m%s\x1b[0m', JSON.stringify(req.query)) // query string
        // console.log('\x1b[32m%s\x1b[0m', JSON.stringify(pattern))

        const objAssigned = Object.assign({}, defaultParams, req.query, req.params)
        // console.log(objAssigned)

        return app.render(req, res, `/${page}`, objAssigned)
      })
    )

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })

// other way:

// app.prepare().then(() => {
//   express()
//     .use(compression())
//     .use(handle)
//     .listen(port, err => {
//       if (err) throw err
//       console.log(`> Ready on http://localhost:${port}`)
//     })

//   // const server = express()

//   // server.use('/static', express.static('static'))

//   // // server.get('/thing/:id', (req, res) => {
//   // //     return app.render(req, res, '/thing', { id: req.params.id })
//   // // })

//   // server.get('*', (req, res) => {
//   //   // return handle(req, res)
//   //   return app.render(req, res, '/', req.query)
//   // })

//   // server.listen(port, (err) => {
//   //   if (err) throw err
//   //   console.log(`> Ready on http://localhost:${port}`)
//   // })
// })
