import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const PROJECT_ELABORATION_REPLY = createRequestTypes('PROJECT_ELABORATION_REPLY')

export const projectElaborationReply = {
  request: text => (actionTypes(PROJECT_ELABORATION_REPLY.REQUEST, { text })),
  success: payload => (actionTypes(PROJECT_ELABORATION_REPLY.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_ELABORATION_REPLY.FAILURE, { error })),
}
