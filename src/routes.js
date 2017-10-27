import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'

import { injectGlobals } from 'utils/style'
import anonymousOnly from 'hoc/security/anonymousOnly'
import requiresAuth from 'hoc/security/requiresAuth'
import {
  App,
  FirmPage,
  ForgotPasswordPage,
  LoginPage,
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
  SignupPage,
} from 'components'
import { ProjectPreValidatePage, VerifyEmailPage, EmailValidationPage, HomePage, SearchResultPage } from 'containers'
import { resets, scaffolding } from 'components/themes/default'

injectGlobals([resets, scaffolding])
addLocaleData([...es, ...en, ...fr])

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="projects/:projectId/firms/:firmId" component={requiresAuth(FirmPage)} />
    <Route path="forgot-password" component={anonymousOnly(ForgotPasswordPage)} />
    <Route path="login" component={anonymousOnly(LoginPage)} />
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
    <Route path="search-result" component={SearchResultPage} />
    <Route path="signup" component={anonymousOnly(SignupPage)} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
