import fetchDebugHandler from './fetchDebugHandler'

it('log the response when api.debug is true', () => {
  const config = { api: { debug: true } }

  fetchDebugHandler(config, 'GET', 'http://google.com')({ foo: 'bar' })
  expect(global.console.info).toHaveBeenCalled()
  expect(global.console.info.mock.calls[0].join(' ')).toMatchSnapshot()
})

it('does not log the response when api.debug is false', () => {
  const config = { api: { debug: false } }

  fetchDebugHandler(config, 'GET', 'http://google.com')({ foo: 'bar' })
  expect(global.console.info).not.toHaveBeenCalled()
})

it('does not log the response on the browser', () => {
  const config = { api: { debug: true }, browser: true }

  fetchDebugHandler(config, 'GET', 'http://google.com')({ foo: 'bar' })
  expect(global.console.info).not.toHaveBeenCalled()
})

it('does not log the response in production', () => {
  const config = { api: { debug: true }, browser: false }

  process.env.NODE_ENV = 'production'

  fetchDebugHandler(config, 'GET', 'http://google.com')({ foo: 'bar' })
  expect(global.console.info).not.toHaveBeenCalled()
})

global.console.info = jest.fn()

beforeEach(() => {
  global.console.info.mockClear()
})

const env = process.env.NODE_ENV

afterEach(() => {
  process.env.NODE_ENV = env
})

