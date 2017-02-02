import cookie from 'react-cookie'
import { initialState } from './selectors'
import { AUTH_LOGIN, AUTH_LOGOUT } from './actions'
import { isAuthenticated } from './selectors'

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN.SUCCESS:
      const { grantType } = action.payload

      return {
        ...state,
        isAuthenticated: isAuthenticated(grantType),
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state
  }
}
