import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { createHistory } from 'history'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { basename } from 'config'
import configureStore from 'store/configure'
import sagas from 'store/sagas'
import { anchorate } from 'anchorate'
import { setSSR } from 'store/actions'
import { list as sagaList } from 'sagas/ssr/collector'

import routes from 'routes'

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const baseHistory = useRouterHistory(createHistory)({ basename })
const store = configureStore(initialState, baseHistory)

store.runSaga(sagas)

const history = syncHistoryWithStore(baseHistory, store)
const root = document.getElementById('app')

history.listen(() => {
  anchorate()
})

const renderApp = () => (
  <AppContainer>
    <Provider store={store}>
      <Router key={Math.random()} history={history} routes={routes} />
    </Provider>
  </AppContainer>
)

injectTapEventPlugin()

/*
  SSR explanation
  ==============

  Here is what happens when a page is requested :
   1 - Markup is generated on server side, sagas are triggered to retrieve the data.
       SSR state value : *true*
          Consequences:
            * Sagas triggered during the mount are blocked and stored by the collector
            * The server manually runs the stored sagas
   2 - The client receives the state and the html, it tries to match the html with the markup he generates from the state
       SSR state value : *true*
          Consequence :
            * Sagas triggered by the mount are also stored in the collector, but nobody uses it
            * Thus, sagas triggered are *never run* during ths step
   3 - The client dispatches a setSSR(false)
          Consequence :
            * All the ssr non-compatible components are switched on, components are already mounted so no saga is triggered
   4 - The sagas stored by the client during mounting are eventually played
            * This is to make sure the components are rendered, even in the case where the SSR fails
   5 - Page is ready :-)

   Examples of ssr non-compatible components :
      * SlickCarousel (with responsive prop set)
      * MotionMenu
      * NotificationsSystem
 */
function* initSaga(forks) {
  const tasks = yield forks

  yield tasks
}

render(renderApp(), root, () => {
  store.dispatch(setSSR(false))
  store.runSaga(initSaga, sagaList())
})

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
