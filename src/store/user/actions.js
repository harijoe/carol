import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const USER_CREATE = createRequestTypes('USER_CREATE')
export const USER_DETAILS = createRequestTypes('USER_DETAILS')
export const USER_UPDATE = createRequestTypes('USER_UPDATE')

export const userCreate = {
  request: (data, resolve, reject) => (actionTypes(USER_CREATE.REQUEST, { data, resolve, reject })),
  success: payload => (actionTypes(USER_CREATE.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_CREATE.FAILURE, { error })),
}

export const userDetails = {
  request: (resolve, reject) => (actionTypes(USER_DETAILS.REQUEST, { resolve, reject })),
  success: payload => (actionTypes(USER_DETAILS.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_DETAILS.FAILURE, { error })),
}

export const userUpdate = {
  request: (data, id, resolve, reject) => (actionTypes(USER_UPDATE.REQUEST, { data, id, resolve, reject })),
  success: payload => (actionTypes(USER_UPDATE.SUCCESS, { payload })),
  failure: error => (actionTypes(USER_UPDATE.FAILURE, { error })),
}
