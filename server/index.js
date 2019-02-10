const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const apiRouter = require('./router')
const getDataFromApi = require('./helpers/getDataFromApi')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || 'http://127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Get Data for DB
  getDataFromApi([
    { name: 'planets', url: 'https://swapi.co/api/planets/' },
    { name: 'starships', url: 'https://swapi.co/api/starships/' },
    { name: 'pilots', url: 'https://swapi.co/api/people/' }
  ])

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express

  app.use('/api', apiRouter)
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)

  const selfHost = host === 'localhost' ? '127.0.0.1' : host
  consola.ready({
    message: `Server listening on http://${selfHost}:${port}`,
    badge: true
  })
}
start()
