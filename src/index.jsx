import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import allReducers from './reducers'

import Layout from './containers/Layout'
import Home from './containers/Home'
import Profile from './containers/user/Profile'
import Signup from './containers/user/Signup'
import SignupConfirmation from './containers/user/SignupConfirmation'
import Content from './containers/Content'
import SearchPro from './containers/pro/SearchPro'
import SearchSite from './containers/SearchSite'
import Help from './containers/Help'

const logger = createLogger()
const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="content" component={Content} />
          <Route path="help" component={Help} />
          <Route path="profile" component={Profile} />
          <Route path="search" component={SearchSite} />
          <Route path="search-pro" component={SearchPro} />
          <Route path="signup" component={Signup} />
          <Route path="signup-confirmation" component={SignupConfirmation} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
