import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const USER_DETAILS = createRequestTypes('USER_DETAILS')
export const USER_UPDATE = createRequestTypes('USER_UPDATE')

export const profile = {
  request: (resolve, reject) => (actionTypes(USER_DETAILS.REQUEST, { resolve, reject })),
  success: payload => (actionTypes(USER_DETAILS.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_DETAILS.FAILURE, { error })),
}

export const profileUpdate = {
  request: (data, id, resolve, reject) => (actionTypes(USER_UPDATE.REQUEST, { data, id, resolve, reject })),
  success: payload => (actionTypes(USER_UPDATE.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_UPDATE.FAILURE, { error })),
}
