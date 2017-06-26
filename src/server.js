import { createMemoryHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'express'
import reactCookie from 'react-cookie'
import express from 'services/express'
import routes from 'routes'
import configureStore from 'store/configure'
import { port, ip, locales, purgeCacheToken, devServer } from 'config'
import renderResponse from './server/index'

global.window = require('utils/windowOrGlobal')

global.navigator = { userAgent: 'all' }

const router = new Router()

router.use((req, res, next) => {
  if (devServer) {
    global.webpackIsomorphicTools.refresh()
  }

  const memoryHistory = createMemoryHistory(req.url)
  let store = configureStore({}, memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  reactCookie.plugToRequest(req, res)

  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search)
    }

    if (error || !renderProps) {
      return next(error)
    }

    store = configureStore(store.getState(), memoryHistory)

    return renderResponse(store, renderProps, req, res)
  })
})

const app = express(router)

app.listen(port, (error) => {
  if (error) {
    console.error('server', error)
  } else {
    console.info(`Server listening on ${ip}:${port}`)
  }
})

// Init SSR cache for front page
// CURRENTLY, cache is only reloaded for FR and homepage
// It needs to be extended later for other languages and other pages as necessary
router.handle({
  url: '/purge-ssr',
  method: 'POST',
  hostname: locales.fr_FR.url.replace('https://', ''),
  headers: { authorization: `Bearer ${purgeCacheToken}` },
}, { send: () => console.info('Cache regeneration attempt finished') })

export default app
