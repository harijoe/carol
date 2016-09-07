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
import Home from './containers/home'
import Layout from './containers/layout'
import UserList from './containers/user-list'
import UserDetail from './containers/user-detail'

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
        <Route path="users" component={UserList} />
        <Route path="users/(:filter)" component={UserDetail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
