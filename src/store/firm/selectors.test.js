import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual(selectors.initialState)
})

test('getList', () => {
  expect(selectors.getList([])).toEqual([])
  expect(selectors.getList()).toEqual(selectors.initialState.list)
  expect(selectors.getList(selectors.initialState)).toEqual([])
})

test('getDetails', () => {
  expect(selectors.getDetails({})).toEqual()
  expect(selectors.getDetails()).toEqual()
  expect(selectors.getDetails(selectors.initialState)).toEqual()
})
