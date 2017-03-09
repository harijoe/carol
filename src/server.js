import React from 'react'
import serialize from 'serialize-javascript'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'express'
import express from 'services/express'
import routes from 'routes'
import configureStore from 'store/configure'
import { env, port, ip } from 'config'
import isAuthenticated from 'utils/auth'
import Html from 'components/Html'
import { setCountry, setLang, setAuthenticated } from 'store/actions'
import { getLocaleFromHostname, getLangFromLocale, getCountryFromLocale } from 'utils/locale'
import reactCookie from 'react-cookie'

global.window = require('utils/windowOrGlobal')

global.navigator = { userAgent: 'all' }

const router = new Router()

router.use((req, res, next) => {
  if (env === 'development') {
    global.webpackIsomorphicTools.refresh()
  }

  const memoryHistory = createMemoryHistory(req.url)
  const store = configureStore({}, memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search)
    }

    if (error || !renderProps) {
      return next(error)
    }

    const fetchData = () => new Promise((resolve, reject) => {
      const method = req.method.toLowerCase()
      const { params, location, components } = renderProps
      const promises = []

      components.forEach((component) => {
        if (component) {
          while (component && !component[method]) {
            // eslint-disable-next-line no-param-reassign
            component = component.WrappedComponent
          }
          // eslint-disable-next-line no-unused-expressions
          component &&
          component[method] &&
          promises.push(component[method]({ req, res, params, location, store }))
        }
      })

      Promise.all(promises).then(resolve).catch(reject)
    })

    const render = (providedStore) => {
      // Initialize locale from hostname
      const locale = getLocaleFromHostname(req.hostname)
      const lang = getLangFromLocale(locale)
      const country = getCountryFromLocale(locale)

      providedStore.dispatch(setLang(lang))
      providedStore.dispatch(setCountry(country))

      // Initialize auth from cookies
      reactCookie.plugToRequest(req, res)
      const grantType = reactCookie.load('grant_type')

      providedStore.dispatch(setAuthenticated(isAuthenticated(grantType)))

      const content = renderToString(
        <Provider store={providedStore}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
      const initialState = providedStore.getState()
      const assets = global.webpackIsomorphicTools.assets()
      const state = `window.__INITIAL_STATE__ = ${serialize(initialState)}`
      const markup = <Html {...{ styles, assets, state, content, lang }} />
      const doctype = '<!doctype html>\n'
      const html = renderToStaticMarkup(markup)

      res.send(doctype + html)
    }

    return fetchData()
      .then(() => render(configureStore(store.getState(), memoryHistory)))
      .catch((err) => {
        console.error(err)

        return res.status(500).end()
      })
  })
})

const app = express(router)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Server listening on https://${ip}:${port}`)
  }
})

export default app
