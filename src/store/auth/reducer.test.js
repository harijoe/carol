import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles AUTH_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.AUTH_LOGIN.SUCCESS,
    payload: { grantType: 'password', accessToken: '123test', expiresIn: 12000, refreshToken: '345test' },
  })).toEqual({
    ...initialState,
    authenticated: true,
    accessToken: '123test',
    expiresIn: 6000,
    refreshToken: '345test',
  })
})

it('handles AUTH_SET_AUTHENTICATED', () => {
  expect(reducer(initialState, {
    type: actions.AUTH_SET_AUTHENTICATED,
    payload: true,
  })).toEqual({
    ...initialState,
    authenticated: true,
  })
})

it('handles AUTH_LOGOUT', () => {
  expect(reducer({ ...initialState }, { type: actions.AUTH_LOGOUT })).toEqual({
    ...initialState,
    authenticated: false,
  })
})
