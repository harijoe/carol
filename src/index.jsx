import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import allReducers from './reducers'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Profile from './pages/user/Profile'
import Signup from './pages/user/Signup/Registration'
import SignupConfirmation from './pages/user/Signup/Confirmation'
import Content from './pages/Content'
import Login from './pages/user/Login'
import FindAPro from './pages/pro/FindAPro'
import SearchSite from './pages/SearchSite'
import Help from './pages/Help'
import Message from './pages/user/Message'
import Project from './pages/user/Project'
import rootSaga from './sagas'
import ForgotPassword from './pages/user/ForgotPassword'
import ResetPassword from './pages/user/ResetPassword'
import ForgotPasswordConfirmation from './pages/user/ForgotPasswordConfirmation'
import ResetPasswordConfirmation from './pages/user/ResetPasswordConfirmation'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  allReducers,
  applyMiddleware(
    thunk,
    promise,
    logger,
    routerMiddleware(browserHistory),
    sagaMiddleware
  )
)
const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="content" component={Content} />
        <Route path="help" component={Help} />
        <Route path="profile" component={Profile} />
        <Route path="search" component={SearchSite} />
        <Route path="search-pro" component={FindAPro} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
        <Route path="signup-confirmation" component={SignupConfirmation} />
        <Route path="message" component={Message} />
        <Route path="project" component={Project} />
        <Route path="forgot-password" component={ForgotPassword} />
        <Route path="forgot-password-confirmation" component={ForgotPasswordConfirmation} />
        <Route path="reset-password" component={ResetPassword} />
        <Route path="reset-password-confirmation" component={ResetPasswordConfirmation} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
