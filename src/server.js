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
import Html from 'components/Html'
import { setCountry, setLang } from 'store/locale/actions'
import { getLocaleFromHostname, getLangFromLocale, getCountryFromLocale } from 'utils/locale'

global.window = require('utils/windowOrGlobal')

global.navigator = { userAgent: 'all' }

const router = new Router()
let ssrPort = port

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

      const content = renderToString(
        <Provider store={providedStore}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
      const initialState = providedStore.getState()
      const assets = global.webpackIsomorphicTools.assets()
      const state = `window.INITIAL_STATE = ${serialize(initialState)}`
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

if (env === 'development') {
  ssrPort = port + 1
}

app.listen(ssrPort, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on http://${ip}:${ssrPort}`)
  }
})

export default app
