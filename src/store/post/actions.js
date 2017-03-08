import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const POST_LIST = createRequestTypes('POST_LIST')

export const postList = {
  request: (scope, tags, limit) => (actionTypes(POST_LIST.REQUEST, { scope, tags, limit })),
  success: payload => (actionTypes(POST_LIST.SUCCESS, { payload })),
  failure: error => (actionTypes(POST_LIST.FAILURE, { error })),
}
