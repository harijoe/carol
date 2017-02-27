import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'
import api from 'services/api'

export const AUTH_LOGIN = createRequestTypes('AUTH_LOGIN')
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

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

// TODO replace credentials by url
export const setToken = dispatch => (
  new Promise((resolve, reject) => {
    dispatch(authLogin('client_credentials').request('', resolve, reject))
  }).then((token) => {
    api.setToken(token.access_token)
  })
)
