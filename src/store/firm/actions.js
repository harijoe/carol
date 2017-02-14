import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const FIRM_LIST = createRequestTypes('FIRM_LIST')
export const FIRM_DETAILS = createRequestTypes('FIRM_DETAILS')

export const firmList = {
  request: (params, resolve, reject) => (actionTypes(FIRM_LIST.REQUEST, { params, resolve, reject })),
  success: payload => (actionTypes(FIRM_LIST.SUCCESS, { payload })),
  failure: error => (actionTypes(FIRM_LIST.FAILURE, { error })),
}

export const firmDetails = {
  request: (id, resolve, reject) => (actionTypes(FIRM_DETAILS.REQUEST, { id, resolve, reject })),
  success: payload => (actionTypes(FIRM_DETAILS.SUCCESS, { payload })),
  failure: error => (actionTypes(FIRM_DETAILS.FAILURE, { error })),
}
