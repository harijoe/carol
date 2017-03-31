import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const PROJECT_ELABORATION_REPLY = createRequestTypes('PROJECT_ELABORATION_REPLY')
export const PROJECT_ELABORATION_SET_USER = 'PROJECT_ELABORATION_SET_USER'
export const PROJECT_ELABORATION_SET_RESPONSE = 'PROJECT_ELABORATION_SET_RESPONSE'
export const PROJECT_ELABORATION_HERO_DETAILS = createRequestTypes('PROJECT_ELABORATION_HERO_DETAILS')
export const PROJECT_ELABORATION_HERO_SET_RESPONSE = 'PROJECT_ELABORATION_HERO_SET_RESPONSE'

export const heroDetails = {
  request: () => (actionTypes(PROJECT_ELABORATION_HERO_DETAILS.REQUEST)),
  success: payload => (actionTypes(PROJECT_ELABORATION_HERO_DETAILS.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_ELABORATION_HERO_DETAILS.FAILURE, { error })),
}

export const setHeroResponse = (text, payload) => ({
  type: PROJECT_ELABORATION_HERO_SET_RESPONSE,
  payload: {
    text,
    payload,
  },
})

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
