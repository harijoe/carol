import React from 'react'
import { Route, IndexRoute } from 'react-router'

import anonymousOnly from 'hoc/anonymousOnly'
import requiresAuth from 'hoc/requiresAuth'
import {
  App,
  FavoritePage,
  FirmPage,
  FirmListPage,
  ForgotPasswordPage,
  HelpPage,
  HomePage,
  LoginPage,
  MessagePage,
  ProfilePage,
  ProjectListPage,
  ProjectSubmitPage,
  ResetPasswordPage,
  SearchPage,
  SignupPage,
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
    <Route path="projects" component={ProjectListPage} />
    <Route path="reset-password" component={ResetPasswordPage} />
    <Route path="search" component={SearchPage} />
    <Route path="search-firm" component={FirmListPage} />
    <Route path="signup" component={anonymousOnly(SignupPage)} />
    <Route path="submit-project" component={ProjectSubmitPage} />
  </Route>
)

export default routes
