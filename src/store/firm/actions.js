import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const FIRM_LIST = createRequestTypes('FIRM_LIST')
export const FIRM_DETAILS = createRequestTypes('FIRM_DETAILS')
export const FIRM_REVIEWS = createRequestTypes('FIRM_REVIEWS')

export const firmList = {
  request: projectId => actionTypes(FIRM_LIST.REQUEST, { projectId }),
  success: payload => actionTypes(FIRM_LIST.SUCCESS, { payload }),
  failure: error => actionTypes(FIRM_LIST.FAILURE, { error }),
}

export const firmDetails = {
  request: id => actionTypes(FIRM_DETAILS.REQUEST, { id }),
  success: payload => actionTypes(FIRM_DETAILS.SUCCESS, { payload }),
  failure: error => actionTypes(FIRM_DETAILS.FAILURE, { error }),
}

export const firmReviews = {
  request: id => actionTypes(FIRM_REVIEWS.REQUEST, { id }),
  success: payload => actionTypes(FIRM_REVIEWS.SUCCESS, { payload }),
  failure: error => actionTypes(FIRM_REVIEWS.FAILURE, { error }),
}
