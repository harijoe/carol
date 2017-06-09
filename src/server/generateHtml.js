import React from 'react'
import serialize from 'serialize-javascript'
import { ServerStyleSheet } from 'styled-components'
import Html from 'components/Html'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import { fromContext } from 'store/selectors'
import { setDryRun } from 'store/actions'

export default (store, renderProps) => {
  store.dispatch(setDryRun(true))
  const sheet = new ServerStyleSheet()
  const content = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  ))

  store.dispatch(setDryRun(false))

  const styles = sheet.getStyleTags()
  const initialState = store.getState()
  const assets = global.webpackIsomorphicTools.assets()
  const state = `window.__INITIAL_STATE__ = ${serialize(initialState)}`
  const markup = <Html {...{ styles, assets, state, content, lang: fromContext.getLang(state) }} />
  const doctype = '<!doctype html>\n'
  const html = renderToStaticMarkup(markup)

  return doctype + html
}
