import * as selectors from './selectors'

const altState = {
  loading: {
    FETCH_USER: false,
    FETCH_USERS: true,
    CREATE_USER: false,
    UPDATE_USER: true,
  },
  error: {
    FETCH_USER: false,
    FETCH_USERS: false,
    CREATE_USER: true,
    UPDATE_USER: true,
  },
}

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    loading: {},
    error: {},
  })
})

test('getLoading', () => {
  expect(selectors.getLoading()).toEqual(selectors.initialState.loading)
  expect(selectors.getLoading(selectors.initialState)).toEqual(selectors.initialState.loading)
})

test('getError', () => {
  expect(selectors.getError()).toEqual(selectors.initialState.error)
  expect(selectors.getError(selectors.initialState)).toEqual(selectors.initialState.error)
})

describe('isLoading', () => {
  test('isLoading', () => {
    expect(selectors.isLoading(selectors.initialState, 'FETCH_USER')).toBe(false)
    expect(selectors.isLoading(altState, 'FETCH_USER')).toBe(false)
    expect(selectors.isLoading(altState, 'FETCH_USERS')).toBe(true)
  })
})

describe('hasError', () => {
  test('has Error', () => {
    expect(selectors.hasError(selectors.initialState, 'FETCH_USERS')).toBe(false)
    expect(selectors.hasError(altState, 'FETCH_USERS')).toBe(false)
    expect(selectors.hasError(altState, 'CREATE_USER')).toBe(true)
  })
})
