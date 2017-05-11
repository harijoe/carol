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
  PhoneValidationPage,
  PhoneCodeValidationPage,
  ProjectElaborationPage,
  ProfilePage,
  ProjectListPage,
  ProjectPage,
  ProjectSubmitPage,
  ProjectAccountPage,
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
    <Route path="projects/:projectId/account" component={requiresAuth(ProjectAccountPage)} />
    <Route path="projects/:projectId" component={requiresAuth(ProjectPage)} />
    <Route path="projects/:projectId/search-firms" component={requiresAuth(FirmListPage)} />
    {/* <Route path="projects/:projectId/validation/phone" component={requiresAuth(PhoneValidationPage)} /> */}
    {/* <Route path="projects/:projectId/validation/phone/code" component={requiresAuth(PhoneCodeValidationPage)} /> */}
    <Route path="validation/phone" component={requiresAuth(PhoneValidationPage)} />
    <Route path="validation/phone/code" component={requiresAuth(PhoneCodeValidationPage)} />
    <Route path="project-elaboration" component={ProjectElaborationPage} />
    <Route path="project-prevalidate/:chatbotStorageId" component={requiresAuth(ProjectPreValidatePage)} />
    <Route path="reset-password" component={ResetPasswordPage} />
    <Route path="search" component={requiresAuth(SearchPage)} />
    <Route path="signup" component={anonymousOnly(SignupPage)} />
    <Route path="submit-project" component={requiresAuth(ProjectSubmitPage)} />
  </Route>
)

export default routes
