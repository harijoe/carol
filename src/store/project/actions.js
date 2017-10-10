import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const PROJECT_SUBMIT = createRequestTypes('PROJECT_SUBMIT')
export const PROJECT_LIST = createRequestTypes('PROJECT_LIST')
export const PROJECT_DETAILS = createRequestTypes('PROJECT_DETAILS')
export const PROJECT_UPDATE = createRequestTypes('PROJECT_UPDATE')
export const PROJECT_VALIDATE = createRequestTypes('PROJECT_VALIDATE')
export const PROJECT_CHECK_VALIDATION_FLOW = 'PROJECT_CHECK_VALIDATION_FLOW'
export const GOOGLE_PLACE_COORDS_RESULTS = 'GOOGLE_PLACE_COORDS_RESULTS'

export const projectList = {
  request: () => actionTypes(PROJECT_LIST.REQUEST),
  success: payload => actionTypes(PROJECT_LIST.SUCCESS, { payload }),
  failure: error => actionTypes(PROJECT_LIST.FAILURE, { error }),
}

export const projectDetails = {
  request: id => actionTypes(PROJECT_DETAILS.REQUEST, { id }),
  success: (payload, actionParams) => actionTypes(PROJECT_DETAILS.SUCCESS, { payload, actionParams }),
  failure: error => actionTypes(PROJECT_DETAILS.FAILURE, { error }),
}

export const projectUpdate = {
  request: (data, id) => actionTypes(PROJECT_UPDATE.REQUEST, { data, id }),
  success: payload => actionTypes(PROJECT_UPDATE.SUCCESS, { payload }),
  failure: error => actionTypes(PROJECT_UPDATE.FAILURE, { error }),
}

export const projectValidate = {
  request: (projectData, userData, projectId) =>
    actionTypes(PROJECT_VALIDATE.REQUEST, {
      projectData,
      userData,
      projectId,
    }),
  success: payload => actionTypes(PROJECT_VALIDATE.SUCCESS, { payload }),
  failure: error => actionTypes(PROJECT_VALIDATE.FAILURE, { error }),
}

export const checkValidationFlow = projectId => actionTypes(PROJECT_CHECK_VALIDATION_FLOW, { projectId })

export const googlePlaceCoordsResults = payload => actionTypes(GOOGLE_PLACE_COORDS_RESULTS, { payload })
