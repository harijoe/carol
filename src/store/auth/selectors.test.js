import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({authenticated: false})
})

test('getLang', () => {
  expect(selectors.isAuthenticated({ authenticated: true })).toEqual(true)
})
