import { createMemoryHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'express'
import reactCookie from 'react-cookie'
import express from 'services/express'
import routes from 'routes'
import configureStore from 'store/configure'
import { env, port, ip } from 'config'
import renderResponse from './server/index'

global.window = require('utils/windowOrGlobal')

global.navigator = { userAgent: 'all' }

const router = new Router()

router.use((req, res, next) => {
  if (env === 'development') {
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
    console.error(error)
  } else {
    console.info(`Server listening on ${ip}:${port}`)
  }
})

export default app
