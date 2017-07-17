import { createMemoryHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'express'
import reactCookie from 'services/cookies'
import express from 'services/express'
import routes from 'routes'
import configureStore from 'store/configure'
import { port, ip, locales, purgeCacheToken, devServer } from 'config'
import renderResponse from './server/index'

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

const purgeSSRCache = locale => new Promise(resolve =>
  router.handle({
    url: '/',
    method: 'PURGE',
    hostname: locales[locale].url.replace(new RegExp('https?://'), ''),
    headers: { authorization: `Bearer ${purgeCacheToken}` },
  }, { send: resolve })
)

const purgeAllCaches = async () => {
  await Promise.all(Object.keys(locales).map(purgeSSRCache))
  console.info('Cache regeneration attempt finished')
}

purgeAllCaches()

export default app
