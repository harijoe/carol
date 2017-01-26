import * as selectors from './selectors'

const status = {
  status: null,
}

test('initialState', () => {
  expect(selectors.initialState).toEqual(status)
})

test('getStatus', () => {
  expect(selectors.getStatus(selectors.initialState)).toEqual(null)
})
