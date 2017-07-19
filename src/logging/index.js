import { browser } from 'config'

const RavenStub = {
  captureException: () => {},
  captureMessage: () => {},
}

const requireRaven = () => {
  if (!browser) {
    return RavenStub
  }

  const RavenJS = require('raven-js')

  RavenJS.config('https://3ccd80466e1946569044c33368ed7885@sentry.io/192401', {
    environment: process.env.NODE_ENV,
  }).install()

  window.addEventListener('unhandledrejection', rejection => RavenJS.captureException(rejection.reason))

  return RavenJS
}

export default requireRaven()
