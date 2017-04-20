import React from 'react'
import serialize from 'serialize-javascript'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import Html from 'components/Html'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import { fromContext } from 'store/selectors'

export default (store, renderProps) => {
  const content = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  )

  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
  const initialState = store.getState()
  const assets = global.webpackIsomorphicTools.assets()
  const state = `window.__INITIAL_STATE__ = ${serialize(initialState)}`
  const markup = <Html {...{ styles, assets, state, content, lang: fromContext.getLang(state) }} />
  const doctype = '<!doctype html>\n'
  const html = renderToStaticMarkup(markup)

  return doctype + html
}
