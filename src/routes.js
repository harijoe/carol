import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { addLocaleData } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'

import { injectGlobals } from 'utils/style'
import anonymousOnly from 'hoc/security/anonymousOnly'
import requiresAuth from 'hoc/security/requiresAuth'
import App from 'components/App'
import DirectoryHomePage from 'pages/DirectoryHomePage'
import FirmPage from 'pages/FirmPage'
import ForgotPasswordPage from 'pages/ForgotPasswordPage'
import LoginPage from 'pages/LoginPage'
import NotFoundPage from 'pages/NotFoundPage'
import PhoneValidationPage from 'pages/PhoneValidationPage'
import PhoneCodeValidationPage from 'pages/PhoneCodeValidationPage'
import ProHomePage from 'pages/ProHomePage'
import ProjectElaborationPage from 'pages/ProjectElaborationPage'
import ProjectValidationPage from 'pages/ProjectValidationPage'
import ProfilePage from 'pages/ProfilePage'
import ProjectListPage from 'pages/ProjectListPage'
import ProjectPage from 'pages/ProjectPage'
import ProjectAccountPage from 'pages/ProjectAccountPage'
import ResetPasswordPage from 'pages/ResetPasswordPage'
import SignupPage from 'pages/SignupPage'
import FeaturesPage from 'pages/FeaturesPage'
import VersionPage from 'pages/VersionPage'
import ProjectPreValidatePage from 'containers/ProjectPreValidatePage'
import VerifyEmailPage from 'containers/VerifyEmailPage'
import EmailValidationPage from 'containers/EmailValidationPage'
import HomePage from 'containers/HomePage'
import SearchResultPage from 'containers/SearchResultPage'
import { resets, scaffolding } from 'theme/default'

injectGlobals([resets, scaffolding])
addLocaleData([...es, ...en, ...fr])

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="version" component={VersionPage} />
    <Route path="features" component={FeaturesPage} />
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
    <Route path="pro" component={ProHomePage} />
    <Route path="directory" component={DirectoryHomePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
