import React from 'react'
import { Route, IndexRoute } from 'react-router'

import anonymousOnly from 'hoc/anonymousOnly'
import requiresAuth from 'hoc/requiresAuth'
import {
  App,
  CompanyPage,
  FavoritePage,
  ForgotPasswordPage,
  HelpPage,
  HomePage,
  LoginPage,
  ProfilePage,
  ProjectPage,
  ResetPasswordPage,
  SearchCompanyPage,
  SearchPage,
  SignupPage,
} from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="company/:companyId" component={CompanyPage} />
    <Route path="favorite" component={requiresAuth(FavoritePage)} />
    <Route path="forgot-password" component={anonymousOnly(ForgotPasswordPage)} />
    <Route path="help" component={HelpPage} />
    <Route path="login" component={anonymousOnly(LoginPage)} />
    <Route path="profile" component={requiresAuth(ProfilePage)} />
    <Route path="project" component={requiresAuth(ProjectPage)} />
    <Route path="reset-password" component={anonymousOnly(ResetPasswordPage)} />
    <Route path="search" component={SearchPage} />
    <Route path="search-pro" component={requiresAuth(SearchCompanyPage)} />
    <Route path="signup" component={anonymousOnly(SignupPage)} />
  </Route>
)

export default routes
