import React from 'react'
import { Route, IndexRoute } from 'react-router'

import anonymousOnly from 'hoc/anonymousOnly'
import requiresAuth from 'hoc/requiresAuth'
import {
  App,
  FirmPage,
  FavoritePage,
  ForgotPasswordPage,
  HelpPage,
  HomePage,
  LoginPage,
  ProfilePage,
  ProjectPage,
  ResetPasswordPage,
  SearchFirmPage,
  SearchPage,
  SignupPage,
  ProjectSubmitPage,
  MessagePage,
} from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="firm/:firmId" component={FirmPage} />
    <Route path="favorite" component={requiresAuth(FavoritePage)} />
    <Route path="forgot-password" component={anonymousOnly(ForgotPasswordPage)} />
    <Route path="help" component={HelpPage} />
    <Route path="login" component={anonymousOnly(LoginPage)} />
    <Route path="message" component={requiresAuth(MessagePage)} />
    <Route path="profile" component={requiresAuth(ProfilePage)} />
    <Route path="project" component={ProjectPage} />
    <Route path="signup" component={anonymousOnly(SignupPage)} />
    <Route path="submit-project" component={ProjectSubmitPage} />
    <Route path="search" component={SearchPage} />
    <Route path="search-firm" component={SearchFirmPage} />
    <Route path="signup" component={anonymousOnly(SignupPage)} />
  </Route>
)

export default routes
