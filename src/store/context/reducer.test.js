import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles CONTEXT_SET_COUNTRY', () => {
  expect(
    reducer(initialState, {
      type: actions.CONTEXT_SET_COUNTRY,
      payload: 'myCountry',
    }),
  ).toEqual({
    ...initialState,
    country: 'myCountry',
  })
})

it('handles CONTEXT_SET_LANG', () => {
  expect(
    reducer(initialState, {
      type: actions.CONTEXT_SET_LANG,
      payload: 'myLang',
    }),
  ).toEqual({
    ...initialState,
    lang: 'myLang',
  })
})
