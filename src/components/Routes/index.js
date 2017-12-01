import React from 'react'
import { Route, Switch } from 'react-router-dom'

import anonymousOnly from 'hoc/security/anonymousOnly'
import requiresAuth from 'hoc/security/requiresAuth'

import asyncComponent from 'utils/asyncComponent'

import HomePage from 'containers/HomePage'

const AsyncProjectPreValidatePage = asyncComponent(() => import(/* webpackChunkName: "ProjectPreValidatePage" */ 'containers/ProjectPreValidatePage'))
const AsyncVerifyEmailPage = asyncComponent(() => import(/* webpackChunkName: "VerifyEmailPage" */ 'containers/VerifyEmailPage'))
const AsyncEmailValidationPage = asyncComponent(() => import(/* webpackChunkName: "EmailValidationPage" */ 'containers/EmailValidationPage'))
const AsyncSearchResultPage = asyncComponent(() => import(/* webpackChunkName: "SearchResultPage" */ 'containers/SearchResultPage'))

const AsyncFirmPage = asyncComponent(() => import(/* webpackChunkName: "FirmPage" */ 'pages/FirmPage'))
const AsyncForgotPasswordPage = asyncComponent(() => import(/* webpackChunkName: "ForgotPasswordPage" */ 'pages/ForgotPasswordPage'))
const AsyncLoginPage = asyncComponent(() => import(/* webpackChunkName: "LoginPage" */ 'pages/LoginPage'))
const AsyncNotFoundPage = asyncComponent(() => import(/* webpackChunkName: "NotFoundPage" */ 'pages/NotFoundPage'))
const AsyncPhoneValidationPage = asyncComponent(() => import(/* webpackChunkName: "PhoneValidationPage" */ 'pages/PhoneValidationPage'))
const AsyncPhoneCodeValidationPage = asyncComponent(() => import(/* webpackChunkName: "PhoneCodeValidationPage" */ 'pages/PhoneCodeValidationPage'))
const AsyncProjectElaborationPage = asyncComponent(() => import(/* webpackChunkName: "ProjectElaborationPage" */ 'pages/ProjectElaborationPage'))
const AsyncProjectValidationPage = asyncComponent(() => import(/* webpackChunkName: "ProjectValidationPage" */ 'pages/ProjectValidationPage'))
const AsyncProfilePage = asyncComponent(() => import(/* webpackChunkName: "ProfilePage" */ 'pages/ProfilePage'))
const AsyncProjectListPage = asyncComponent(() => import(/* webpackChunkName: "ProjectListPage" */ 'pages/ProjectListPage'))
const AsyncProjectPage = asyncComponent(() => import(/* webpackChunkName: "ProjectPage" */ 'pages/ProjectPage'))
const AsyncProjectAccountPage = asyncComponent(() => import(/* webpackChunkName: "ProjectAccountPage" */ 'pages/ProjectAccountPage'))
const AsyncProHomePage = asyncComponent(() => import(/* webpackChunkName: "ProHomePage" */ 'pages/ProHomePage'))
const AsyncResetPasswordPage = asyncComponent(() => import(/* webpackChunkName: "ResetPasswordPage" */ 'pages/ResetPasswordPage'))
const AsyncSignupPage = asyncComponent(() => import(/* webpackChunkName: "SignupPage" */ 'pages/SignupPage'))
const AsyncFeaturesPage = asyncComponent(() => import(/* webpackChunkName: "FeaturesPage" */ 'pages/FeaturesPage'))
const AsyncVersionPage = asyncComponent(() => import(/* webpackChunkName: "VersionPage" */ 'pages/VersionPage'))

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/version" component={AsyncVersionPage} />
    <Route exact path="/features" component={AsyncFeaturesPage} />
    <Route exact path="/forgot-password" component={anonymousOnly(AsyncForgotPasswordPage)} />
    <Route exact path="/login" component={anonymousOnly(AsyncLoginPage)} />
    <Route exact path="/profile" component={requiresAuth(AsyncProfilePage)} />
    <Route exact path="/projects" component={requiresAuth(AsyncProjectListPage)} />
    <Route exact path="/projects/:projectId" component={requiresAuth(AsyncProjectPage)} />
    <Route exact path="/projects/:projectId/account" component={requiresAuth(AsyncProjectAccountPage)} />
    <Route exact path="/projects/:projectId/firms/:firmId" component={requiresAuth(AsyncFirmPage)} />
    <Route exact path="/project-elaboration" component={AsyncProjectElaborationPage} />
    <Route exact path="/project-prevalidate/:chatbotStorageId" component={AsyncProjectPreValidatePage} />
    <Route exact path="/project-validation" component={requiresAuth(AsyncProjectValidationPage)} />
    <Route exact path="/validation/email" component={requiresAuth(AsyncEmailValidationPage)} />
    <Route exact path="/validation/phone" component={requiresAuth(AsyncPhoneValidationPage)} />
    <Route exact path="/validation/phone/code" component={requiresAuth(AsyncPhoneCodeValidationPage)} />
    <Route exact path="/verify-email" component={requiresAuth(AsyncVerifyEmailPage)} />
    <Route exact path="/reset-password" component={AsyncResetPasswordPage} />
    <Route exact path="/search-result" component={AsyncSearchResultPage} />
    <Route exact path="/signup" component={anonymousOnly(AsyncSignupPage)} />
    <Route exact path="pro" component={AsyncProHomePage} />
    <Route exact path="*" component={AsyncNotFoundPage} />
  </Switch>
)

export default Routes
