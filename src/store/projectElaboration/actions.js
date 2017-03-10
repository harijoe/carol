import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const PROJECT_ELABORATION_REPLY = createRequestTypes('PROJECT_ELABORATION_REPLY')
export const PROJECT_ELABORATION_SET_USER = 'PROJECT_ELABORATION_SET_USER'
export const PROJECT_ELABORATION_SET_RESPONSE = 'PROJECT_ELABORATION_SET_RESPONSE'

export const projectElaborationReply = {
  request: (text, payload) => (actionTypes(PROJECT_ELABORATION_REPLY.REQUEST, { text, payload })),
  success: payload => (actionTypes(PROJECT_ELABORATION_REPLY.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_ELABORATION_REPLY.FAILURE, { error })),
}

export const setProjectElaborationUser = uuid => ({
  type: PROJECT_ELABORATION_SET_USER,
  payload: uuid,
})

export const setProjectElaborationResponse = text => ({
  type: PROJECT_ELABORATION_SET_RESPONSE,
  payload: text,
})
