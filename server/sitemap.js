const sm = require('sitemap')

const sitemap = sm.createSitemap({
  hostname: 'http://some-website.com',
  cacheTime: 600000 // 600 sec - cache purge period
})

const setup = ({ server }) => {
  console.log('registering sitemap')
  
  sitemap.add({
    url: '/',
    changefreq: 'daily',
    priority: 1
  })

  server.get('/sitemap.xml', (req, res) => {
    console.log('trying to grab sitemap')
    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end()
        return
      }
      res.header('Content-Type', 'application/xml')
      res.send(xml)
    })
  })
}

module.exports = setup
