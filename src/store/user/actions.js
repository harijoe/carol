import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const USER_CREATE = createRequestTypes('USER_CREATE')
export const USER_DETAILS = createRequestTypes('USER_DETAILS')
export const USER_UPDATE = createRequestTypes('USER_UPDATE')
export const USER_FORGOT_PASSWORD = createRequestTypes('USER_FORGOT_PASSWORD')
export const USER_UPDATE_PASSWORD = createRequestTypes('USER_UPDATE_PASSWORD')
export const USER_RESET = 'USER_RESET'
export const USER_VALIDATE_PHONE = createRequestTypes('USER_VALIDATE_PHONE')
export const USER_VALIDATE_EMAIL = createRequestTypes('USER_VALIDATE_EMAIL')
export const USER_VERIFY_EMAIL = createRequestTypes('USER_VERIFY_EMAIL')
export const USER_RESEND_EMAIL = createRequestTypes('USER_RESEND_EMAIL')
export const USER_VALIDATE_PHONE_AGAIN = 'USER_VALIDATE_PHONE_AGAIN'
export const USER_VALIDATE_PHONE_CODE = createRequestTypes('USER_VALIDATE_PHONE_CODE')

export const userCreate = {
  request: data => (actionTypes(USER_CREATE.REQUEST, { data })),
  success: payload => (actionTypes(USER_CREATE.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_CREATE.FAILURE, { error })),
}

export const userDetails = {
  request: () => (actionTypes(USER_DETAILS.REQUEST)),
  success: payload => (actionTypes(USER_DETAILS.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_DETAILS.FAILURE, { error })),
}

export const userUpdate = {
  request: (data, id) => (actionTypes(USER_UPDATE.REQUEST, { data, id })),
  success: payload => (actionTypes(USER_UPDATE.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_UPDATE.FAILURE, { error })),
}

export const forgotPassword = {
  request: data => (actionTypes(USER_FORGOT_PASSWORD.REQUEST, { data })),
  success: payload => (actionTypes(USER_FORGOT_PASSWORD.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_FORGOT_PASSWORD.FAILURE, { error })),
}

export const resetPassword = {
  request: (data, id) => (actionTypes(USER_UPDATE_PASSWORD.REQUEST, { data, id })),
  success: payload => (actionTypes(USER_UPDATE_PASSWORD.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_UPDATE_PASSWORD.FAILURE, { error })),
}

export const resetUser = () => (actionTypes(USER_RESET))
export const validatePhoneAgain = () => (actionTypes(USER_VALIDATE_PHONE_AGAIN))

export const validatePhone = {
  request: data => (actionTypes(USER_VALIDATE_PHONE.REQUEST, { data })),
  success: payload => (actionTypes(USER_VALIDATE_PHONE.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_VALIDATE_PHONE.FAILURE, { error })),
}

export const validatePhoneCode = {
  request: data => (actionTypes(USER_VALIDATE_PHONE_CODE.REQUEST, { data })),
  success: payload => (actionTypes(USER_VALIDATE_PHONE_CODE.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_VALIDATE_PHONE_CODE.FAILURE, { error })),
}

export const validateEmail = {
  request: data => (actionTypes(USER_VALIDATE_EMAIL.REQUEST, { data })),
  success: payload => (actionTypes(USER_VALIDATE_EMAIL.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_VALIDATE_EMAIL.FAILURE, { error })),
}

export const verifyEmail = {
  request: data => (actionTypes(USER_VERIFY_EMAIL.REQUEST, { data })),
  success: payload => (actionTypes(USER_VERIFY_EMAIL.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_VERIFY_EMAIL.FAILURE, { error })),
}

export const resendEmail = {
  request: data => (actionTypes(USER_RESEND_EMAIL.REQUEST, { data })),
  success: payload => (actionTypes(USER_RESEND_EMAIL.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_RESEND_EMAIL.FAILURE, { error })),
}
