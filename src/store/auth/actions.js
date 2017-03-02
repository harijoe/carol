import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'
import api from 'services/api'

export const AUTH_LOGIN = createRequestTypes('AUTH_LOGIN')
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_SET_AUTHENTICATED = 'AUTH_SET_AUTHENTICATED'

export const authLogin = (grantType = 'client_credentials') => ({
  request: (credentials, resolve, reject) => (actionTypes(AUTH_LOGIN.REQUEST, { grantType, credentials, resolve, reject })),
  success: ({ access_token, refresh_token, expires_in }) => (
    actionTypes(AUTH_LOGIN.SUCCESS, {
      payload: {
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: expires_in,
        grantType,
      },
    })
  ),
  failure: error => (actionTypes(AUTH_LOGIN.FAILURE, { error })),
})

export const authLogout = () => (actionTypes(AUTH_LOGOUT))

export const setAuthenticated = authenticated => ({
  type: AUTH_SET_AUTHENTICATED,
  payload: authenticated,
})

// @TODO: move it elsewhere, actions should be stateless/without business logic
export const setToken = (dispatch, grantType = 'client_credentials', credentials = '') => (
  new Promise((resolve, reject) => {
    dispatch(authLogin(grantType).request(credentials, resolve, reject))
  }).then((token) => {
    api.setToken(token.access_token)
  })
)
