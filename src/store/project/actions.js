import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const PROJECT_SUBMIT = createRequestTypes('PROJECT_SUBMIT')
export const PROJECT_LIST = createRequestTypes('PROJECT_LIST')
export const PROJECT_DETAILS = createRequestTypes('PROJECT_DETAILS')

export const projectSubmit = {
  request: () => (actionTypes(PROJECT_SUBMIT.REQUEST)),
  success: () => (actionTypes(PROJECT_SUBMIT.SUCCESS)),
  failure: () => (actionTypes(PROJECT_SUBMIT.FAILURE)),
}

export const projectList = {
  request: (params, resolve, reject) => (actionTypes(PROJECT_LIST.REQUEST, { params, resolve, reject })),
  success: payload => (actionTypes(PROJECT_LIST.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_LIST.FAILURE, { error })),
}

export const projectDetails = {
  request: id => (actionTypes(PROJECT_DETAILS.REQUEST, { id })),
  success: payload => (actionTypes(PROJECT_DETAILS.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_DETAILS.FAILURE, { error })),
}
