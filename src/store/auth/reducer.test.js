import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles AUTH_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.AUTH_LOGIN.SUCCESS,
    payload: { grantType: 'password' },
  })).toEqual({
    ...initialState,
    isAuthenticated: true,
  })
})

it('handles AUTH_LOGOUT', () => {
  expect(reducer({ ...initialState }, { type: actions.AUTH_LOGOUT })).toEqual({
    ...initialState,
    isAuthenticated: false,
  })
})
