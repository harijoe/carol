import cookie from 'react-cookie'
import { facebook, google } from 'config'

export const isAuthenticated = (grantType = cookie.load('grant_type')) =>
  grantType ? [facebook.grantType, google.grantType, 'password'].indexOf(grantType) !== -1 : false

export const initialState = {
  isAuthenticated: isAuthenticated(),
}

export const isLoggedIn = (state = initialState) => state.isAuthenticated || false
