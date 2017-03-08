import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const AUTH_LOGIN = createRequestTypes('AUTH_LOGIN')
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_SET_AUTHENTICATED = 'AUTH_SET_AUTHENTICATED'

export const authLogin = (grantType = 'client_credentials', formName) => ({
  request: credentials => (actionTypes(AUTH_LOGIN.REQUEST, { grantType, formName, credentials })),
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
  failure: error => (actionTypes(AUTH_LOGIN.FAILURE, { error, formName })),
})

export const authLogout = () => (actionTypes(AUTH_LOGOUT))

export const setAuthenticated = authenticated => ({
  type: AUTH_SET_AUTHENTICATED,
  payload: authenticated,
})
