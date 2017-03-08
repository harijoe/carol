import isAuthenticated from 'utils/auth'
import { initialState } from './selectors'
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SET_AUTHENTICATED } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN.SUCCESS: {
      const { grantType, accessToken } = action.payload

      return {
        ...state,
        authenticated: isAuthenticated(grantType), // @TODO: Move it elsewhere, no logic in reducer
        accessToken,
      }
    }
    case AUTH_SET_AUTHENTICATED: {
      return {
        ...state,
        authenticated: action.payload,
      }
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        authenticated: false,
      }
    }
    default: {
      return state
    }
  }
}
