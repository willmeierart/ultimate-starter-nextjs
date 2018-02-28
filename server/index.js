const express = require('express')
const next = require('next')
const compression = require('compression')
const Router = require('./Router')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 3000
const handle = Router.getRequestHandler(app)

console.log(handle)

app.prepare().then(() => {
  express()
    .use(compression())
    .use(handle)
    .listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })

  // const server = express()

  // server.use('/static', express.static('static'))

  // // server.get('/thing/:id', (req, res) => {
  // //     return app.render(req, res, '/thing', { id: req.params.id })
  // // })

  // server.get('*', (req, res) => {
  //   // return handle(req, res)
  //   return app.render(req, res, '/', req.query)
  // })

  // server.listen(port, (err) => {
  //   if (err) throw err
  //   console.log(`> Ready on http://localhost:${port}`)
  // })
})
