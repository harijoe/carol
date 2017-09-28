import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { applyRouterMiddleware, browserHistory, Router } from 'react-router'
import { useScroll } from 'react-router-scroll'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { anchorate } from 'anchorate'
import 'logging'
import reactCookie from 'services/cookies'
import configureStore from 'store/configure'
import sagas from 'store/sagas'
import { setSSR, setProjectElaborationSessionId, enableFeature, setInitialQueryParams , setAuthenticated, userDetails } from 'store/actions'
import { list as sagaList } from 'sagas/ssr/collector'
import isAuthenticated from 'utils/auth'
import generateSessionId from 'utils/generateSessionId'
import { saveProjectElaborationIdInCookies } from 'store/utils'
import routes from 'routes'
import parseLocationSearch from 'utils/parseLocationSearch'

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)

store.runSaga(sagas)

const history = syncHistoryWithStore(browserHistory, store)
const root = document.getElementById('app')

history.listen(() => {
  anchorate()
})

const renderApp = () =>
  <AppContainer>
    <Provider store={store}>
      <Router key={Math.random()} history={browserHistory} routes={routes} render={applyRouterMiddleware(useScroll())} />
    </Provider>
  </AppContainer>

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

store.dispatch(setSSR(false))

// Initialize feature flags from cookies
const features = reactCookie.get('features')

if (features != null) {
  features.split(',').map(feature => store.dispatch(enableFeature(feature.trim())))
}

// Initialize query params
const queryParams = parseLocationSearch(location.search)

store.dispatch(setInitialQueryParams(queryParams))

// Initialize auth from cookies
const grantType = reactCookie.get('grant_type')

// Handle authentication
if (isAuthenticated(grantType)) {
  store.dispatch(setAuthenticated(isAuthenticated(grantType)))
  store.dispatch(userDetails.request())
}

// Initialize projectElaboration sessionId
const sessionId = reactCookie.get('project_elaboration_session_id') || generateSessionId()

saveProjectElaborationIdInCookies(sessionId)

store.dispatch(setProjectElaborationSessionId(sessionId))

store.dispatch({ type: 'INITIATED' })

render(renderApp(), root, () => {
  store.runSaga(initSaga, sagaList())
})

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
