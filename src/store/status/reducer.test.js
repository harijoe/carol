import { initialState, getLoading, getError } from './selectors'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
  expect(reducer(undefined, { type: 'test' })).toEqual(initialState)
})

it('handles SOMETHING_REQUEST', () => {
  expect(
    reducer(initialState, {
      type: 'SOMETHING_REQUEST',
    }),
  ).toEqual({
    loading: {
      ...getLoading(),
      SOMETHING: true,
    },
    error: {
      ...getError(),
      SOMETHING: false,
    },
  })
})

it('handles SOMETHING_SUCCESS', () => {
  expect(
    reducer(initialState, {
      type: 'SOMETHING_SUCCESS',
    }),
  ).toEqual({
    loading: {
      ...getLoading(),
      SOMETHING: false,
    },
    error: {
      ...getError(),
      SOMETHING: false,
    },
  })
})

it('handles SOMETHING_FAILURE', () => {
  expect(
    reducer(initialState, {
      type: 'SOMETHING_FAILURE',
    }),
  ).toEqual({
    loading: {
      ...getLoading(),
      SOMETHING: false,
    },
    error: {
      ...getError(),
      SOMETHING: true,
    },
  })
})
