import React from 'react'
import { Route, IndexRoute } from 'react-router'

import anonymousOnly from 'hoc/security/anonymousOnly'
import requiresAuth from 'hoc/security/requiresAuth'
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
  ProjectElaborationPage,
  ProfilePage,
  ProjectListPage,
  ProjectPage,
  ProjectSubmitPage,
  ResetPasswordPage,
  SearchPage,
  SignupPage,
} from 'components'
import { ProjectPreValidatePage } from 'containers'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="favorite" component={requiresAuth(FavoritePage)} />
    <Route path="firms/:firmId" component={requiresAuth(FirmPage)} />
    <Route path="forgot-password" component={anonymousOnly(ForgotPasswordPage)} />
    <Route path="help" component={HelpPage} />
    <Route path="login" component={anonymousOnly(LoginPage)} />
    <Route path="message" component={requiresAuth(MessagePage)} />
    <Route path="profile" component={requiresAuth(ProfilePage)} />
    <Route path="projects" component={requiresAuth(ProjectListPage)} />
    <Route path="projects/:projectId" component={requiresAuth(ProjectPage)} />
    <Route path="project-elaboration" component={ProjectElaborationPage} />
    <Route path="project-prevalidate" component={requiresAuth(ProjectPreValidatePage)} />
    <Route path="reset-password" component={ResetPasswordPage} />
    <Route path="search" component={requiresAuth(SearchPage)} />
    <Route path="search-firm" component={requiresAuth(FirmListPage)} />
    <Route path="signup" component={anonymousOnly(SignupPage)} />
    <Route path="submit-project" component={requiresAuth(ProjectSubmitPage)} />
  </Route>
)

export default routes
