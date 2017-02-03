import cookie from 'react-cookie'
import config from 'config'

export const isAuthenticated = (grantType = cookie.load('grant_type')) =>
  grantType ? [config.facebook.grantType, 'password'].indexOf(grantType) !== -1 : false

export const initialState = {
  isAuthenticated: isAuthenticated(),
}

export const isLoggedIn = (state = initialState) => state.isAuthenticated || false
