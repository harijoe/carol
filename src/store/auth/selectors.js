import cookie from 'react-cookie'

export const initialState = {
  authenticated: false,
  accessToken: cookie.load('access_token') || null, //@Todo: to export to server side
}

export const isAuthenticated = (state = initialState) => state.authenticated
export const getToken = (state = initialState) => state.accessToken
