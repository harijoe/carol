import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import allReducers from './reducers'
import Home from './containers/Home'
import Layout from './containers/Layout'
import Login from './containers/user/Login'
import Profile from './containers/user/Profile'

const logger = createLogger()
const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="profile" component={Profile} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
