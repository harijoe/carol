import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const PROJECT_SUBMIT = createRequestTypes('PROJECT_SUBMIT')
export const PROJECT_LIST = createRequestTypes('PROJECT_LIST')
export const PROJECT_DETAILS = createRequestTypes('PROJECT_DETAILS')
export const PROJECT_UPDATE = createRequestTypes('PROJECT_UPDATE')

export const projectSubmit = {
  request: () => (actionTypes(PROJECT_SUBMIT.REQUEST)),
  success: () => (actionTypes(PROJECT_SUBMIT.SUCCESS)),
  failure: () => (actionTypes(PROJECT_SUBMIT.FAILURE)),
}

export const projectList = {
  request: () => (actionTypes(PROJECT_LIST.REQUEST)),
  success: payload => (actionTypes(PROJECT_LIST.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_LIST.FAILURE, { error })),
}

export const projectDetails = {
  request: id => (actionTypes(PROJECT_DETAILS.REQUEST, { id })),
  success: (payload, actionParams) => (actionTypes(PROJECT_DETAILS.SUCCESS, { payload, actionParams })),
  failure: error => (actionTypes(PROJECT_DETAILS.FAILURE, { error })),
}

export const projectUpdate = {
  request: (projectData, userData, projectId) => (actionTypes(PROJECT_UPDATE.REQUEST, {
    projectData,
    userData,
    projectId,
  })),
  success: (payload, actionParams) => (actionTypes(PROJECT_UPDATE.SUCCESS, { payload, actionParams })),
  failure: error => (actionTypes(PROJECT_UPDATE.FAILURE, { error })),
}
