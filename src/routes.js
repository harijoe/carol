import React from 'react'
import { Route, IndexRoute } from 'react-router'

import anonymousOnly from 'hoc/security/anonymousOnly'
import requiresAuth from 'hoc/security/requiresAuth'
import {
  App,
  FavoritePage,
  FirmPage,
  ForgotPasswordPage,
  HelpPage,
  LoginPage,
  MessagePage,
  NotFoundPage,
  PhoneValidationPage,
  PhoneCodeValidationPage,
  ProjectElaborationPage,
  ProjectValidationPage,
  ProfilePage,
  ProjectListPage,
  ProjectPage,
  ProjectAccountPage,
  ResetPasswordPage,
  SearchPage,
  SearchResultPage,
  SignupPage,
} from 'components'
import {
  ProjectPreValidatePage,
  VerifyEmailPage,
  EmailValidationPage,
  HomePage,
} from 'containers'

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
    <Route path="project-elaboration" component={ProjectElaborationPage} />
    <Route path="project-prevalidate/:chatbotStorageId" component={ProjectPreValidatePage} />
    <Route path="project-validation" component={requiresAuth(ProjectValidationPage)} />
    <Route path="validation/email" component={requiresAuth(EmailValidationPage)} />
    <Route path="validation/phone" component={requiresAuth(PhoneValidationPage)} />
    <Route path="validation/phone/code" component={requiresAuth(PhoneCodeValidationPage)} />
    <Route path="verify-email" component={requiresAuth(VerifyEmailPage)} />
    <Route path="reset-password" component={ResetPasswordPage} />
    <Route path="search" component={requiresAuth(SearchPage)} />
    <Route path="search-result" component={requiresAuth(SearchResultPage)} />
    <Route path="signup" component={anonymousOnly(SignupPage)} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
