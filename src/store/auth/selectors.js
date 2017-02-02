import cookie from 'react-cookie'
import config from 'config'

export const isAuthenticated = (grantType = cookie.load('grant_type')) => {
  return grantType ? [config.facebook.grantType, 'password'].indexOf(grantType) !== -1 : false
}

export const initialState = {
  isAuthenticated: isAuthenticated(),
}

export const isLogged = (state = initialState) => state.isAuthenticated || null
