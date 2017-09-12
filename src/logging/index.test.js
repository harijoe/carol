describe('logging', () => {

  const afterAndBeforeEach = fn => { beforeEach(fn); afterEach(fn) }

  afterAndBeforeEach(() => {
    jest.resetModules()
  })

  it('returns an empty stub on the server', () => {
    jest.mock('../config.js', () => ({
      browser: false,
      sentry: {
        enabled: true,
      },
    }))
    const logging = require('.')
    expect(logging.default).toEqual(logging.EmptyRavenStub)
  })

  it('returns sentry implementation in the browser if sentry is enabled', () => {
    jest.mock('../config.js', () => ({
      browser: true,
      sentry: {
        enabled: true,
      },
    }))
    const logging = require('.')
    expect(logging.default).not.toEqual(logging.EmptyRavenStub)
  })

  it('returns an empty stub if sentry is disabled', () => {
    jest.mock('../config.js', () => ({
      browser: true,
      sentry: {
        enabled: false,
      },
    }))
    const logging = require('.')
    expect(logging.default).toEqual(logging.EmptyRavenStub)
  })

})
