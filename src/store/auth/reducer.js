import isAuthenticated from 'utils/auth'
import { initialState } from './selectors'
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SET_AUTHENTICATED, AUTH_SET_ACCESS_TOKEN } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN.SUCCESS: {
      const { grantType, accessToken, expiresIn } = action.payload

      return {
        ...state,
        authenticated: isAuthenticated(grantType),
        accessToken,
        expiresIn: expiresIn / 2, // Refresh front token way before back invalidates it, "/ 2" is arbitrary
      }
    }
    case AUTH_SET_AUTHENTICATED: {
      return {
        ...state,
        authenticated: action.payload,
      }
    }
    case AUTH_SET_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.payload,
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
