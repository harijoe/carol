import { browser, sentry } from 'config'

export const EmptyRavenStub = {
  captureException: () => {},
  captureMessage: () => {},
}

let cachedRavenJS = null

const RavenJS = () => {
  if (cachedRavenJS === null) {
    cachedRavenJS = require('raven-js')

    cachedRavenJS.config(sentry.url, {
      environment: process.env.NODE_ENV,
      release: process.env.GIT_SHA1,
    }).install()

    window.addEventListener('unhandledrejection', rejection => cachedRavenJS.captureException(rejection.reason))
  }

  return cachedRavenJS
}

const requireRaven = browser && sentry.enabled ? RavenJS() : EmptyRavenStub

export default requireRaven
