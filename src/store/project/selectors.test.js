import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({ status: null, list: [] })
})

test('getStatus', () => {
  expect(selectors.getStatus(selectors.initialState)).toEqual(null)
})

test('getList', () => {
  expect(selectors.getList(selectors.initialState)).toEqual([])
})

test('getDetails', () => {
  expect(selectors.getDetails(selectors.initialState, 1)).toEqual({})
})
