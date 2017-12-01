import { sentry, browser } from 'config'

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
      release: `v${process.env.VERSION}`,
      tags: {
        git_commit: process.env.GIT_SHA1,
      },
    }).install()

    cachedRavenJS.handleException = errorMessage => {
      console.error(errorMessage)
      this.captureException(errorMessage)
    }

    window.addEventListener('unhandledrejection', rejection => cachedRavenJS.handleException(rejection.reason))
  }

  return cachedRavenJS
}

const requireRaven = browser && sentry.enabled ? RavenJS() : EmptyRavenStub

export default requireRaven
