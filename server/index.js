const { join } = require('path')
const { parse } = require('url')
const express = require('express')
const next = require('next')
const compression = require('compression')
const Router = require('./router/routes').Router
const sitemap = require('./sitemap.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 3000
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express() // just an express server

	sitemap({ server })

	server.use(compression())

	server.use('/static', express.static('static')) // for sitemap

	Router.forEachPattern((
		page,
		pattern,
		defaultParams // from next-url-prettifier
	) =>
		server.get(pattern, (req, res) =>
			app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
		)
	)

	server.get('*', (req, res) => {
		const parsedUrl = parse(req.url, true)
		const { pathname } = parsedUrl
		if (pathname === '/service-worker.js') {
			// for next-offline
			const filePath = join(__dirname, '.next', pathname)
			app.serveStatic(req, res, filePath)
		} else {
			handle(req, res)
		}
	})

	server.listen(port, err => {
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
