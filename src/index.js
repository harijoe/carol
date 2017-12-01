import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'logging'
import configureStore from 'initializers/configureStore'
import initializeLocale from 'initializers/initializeLocale'
import initializeStyle from 'initializers/initializeStyle'
import sagas from 'store/sagas'
import { clientInitiated } from 'store/actions'
import ScrollToTop from 'components/ScrollToTop'
import Routes from 'components/Routes'
import Helmet from 'components/Helmet'
import { ConnectedRouter } from 'react-router-redux'
import IntlProvider from 'containers/IntlProvider'
import GoogleTagManager from 'containers/GoogleTagManager'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
const store = configureStore(history)

// Set lang and country
initializeLocale(store)
initializeStyle()
store.runSaga(sagas)
store.dispatch(clientInitiated())

const root = document.getElementById('root')

const renderApp = () =>
  <Provider store={store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        <ScrollToTop>
            <Helmet />
            <GoogleTagManager />
            <Routes />
        </ScrollToTop>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>

render(renderApp(), root)
