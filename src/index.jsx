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
import injectTapEventPlugin from 'react-tap-event-plugin'

import allReducers from './reducers'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Profile from './pages/user/Profile'
import Signup from './pages/user/Signup/Registration'
import SignupConfirmation from './pages/user/Signup/Confirmation'
import Login from './pages/user/Login'
import FindAPro from './pages/pro/FindAPro'
import ProDetails from './pages/pro/ProDetails'
import SearchSite from './pages/SearchSite'
import Help from './pages/Help'
import Favorite from './pages/user/Favorite'
import Project from './pages/user/Project'
import rootSaga from './sagas'
import ForgotPassword from './pages/user/ForgotPassword'
import ResetPassword from './pages/user/ResetPassword'
import ForgotPasswordConfirmation from './pages/user/ForgotPasswordConfirmation'
import ResetPasswordConfirmation from './pages/user/ResetPasswordConfirmation'
import anonymousOnly from './hoc/anonymousOnly'
import requiresAuth from './hoc/requiresAuth'

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
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="help" component={Help} />
        <Route path="search" component={SearchSite} />

        <Route path="search-pro" component={FindAPro} />
        <Route path="artisan/:proId" component={ProDetails} />

        <Route path="login" component={anonymousOnly(Login)} />
        <Route path="profile" component={requiresAuth(Profile)} />
        <Route path="signup" component={anonymousOnly(Signup)} />
        <Route path="signup-confirmation" component={SignupConfirmation} />

        <Route path="forgot-password" component={anonymousOnly(ForgotPassword)} />
        <Route path="forgot-password-confirmation" component={ForgotPasswordConfirmation} />
        <Route path="reset-password" component={anonymousOnly(ResetPassword)} />
        <Route path="reset-password-confirmation" component={ResetPasswordConfirmation} />

        <Route path="favorite" component={requiresAuth(Favorite)} />
        <Route path="project" component={requiresAuth(Project)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
