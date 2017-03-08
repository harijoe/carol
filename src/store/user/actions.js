import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const USER_CREATE = createRequestTypes('USER_CREATE')
export const USER_DETAILS = createRequestTypes('USER_DETAILS')
export const USER_UPDATE = createRequestTypes('USER_UPDATE')
export const USER_FORGOT_PASSWORD = createRequestTypes('USER_FORGOT_PASSWORD')
export const USER_UPDATE_PASSWORD = createRequestTypes('USER_UPDATE_PASSWORD')
export const USER_RESET = 'USER_RESET'

export const userCreate = {
  request: data => (actionTypes(USER_CREATE.REQUEST, { data })),
  success: payload => (actionTypes(USER_CREATE.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_CREATE.FAILURE, { error, formName: 'SignUpForm' })),
}

export const userDetails = {
  request: () => (actionTypes(USER_DETAILS.REQUEST)),
  success: payload => (actionTypes(USER_DETAILS.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_DETAILS.FAILURE, { error })),
}

export const userUpdate = {
  request: (data, id) => (actionTypes(USER_UPDATE.REQUEST, { data, id })),
  success: payload => (actionTypes(USER_UPDATE.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_UPDATE.FAILURE, { error, formName: 'ProfileForm' })),
}

export const forgotPassword = {
  request: data => (actionTypes(USER_FORGOT_PASSWORD.REQUEST, { data })),
  success: payload => (actionTypes(USER_FORGOT_PASSWORD.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_FORGOT_PASSWORD.FAILURE, { error, formName: 'ForgotPasswordForm' })),
}

export const resetPassword = {
  request: (data, id) => (actionTypes(USER_UPDATE_PASSWORD.REQUEST, { data, id })),
  success: payload => (actionTypes(USER_UPDATE_PASSWORD.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_UPDATE_PASSWORD.FAILURE, { error, formName: 'ResetPasswordForm' })),
}

export const resetUser = () => (actionTypes(USER_RESET))
