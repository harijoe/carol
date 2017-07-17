import actionTypes, { createRequestTypes } from 'utils/createRequestTypes'

export const PROJECT_ELABORATION_GO_TO_PRE_VALIDATE_PAGE = 'PROJECT_ELABORATION_GO_TO_PRE_VALIDATE_PAGE'
export const PROJECT_ELABORATION_PRE_VALIDATE = createRequestTypes('PROJECT_ELABORATION_PRE_VALIDATE')
export const PROJECT_ELABORATION_SET_PRE_VALIDATION_URL = 'PROJECT_ELABORATION_SET_PRE_VALIDATION_URL'
export const PROJECT_ELABORATION_RESET = 'PROJECT_ELABORATION_RESET'
export const PROJECT_ELABORATION_RESET_CONVERSATION = 'PROJECT_ELABORATION_RESET_CONVERSATION'
export const PROJECT_ELABORATION_SET_SESSION_ID = 'PROJECT_ELABORATION_SET_SESSION_ID'
export const PROJECT_ELABORATION_HERO_DETAILS = createRequestTypes('PROJECT_ELABORATION_HERO_DETAILS')
export const PROJECT_ELABORATION_HERO_SET_RESPONSE = 'PROJECT_ELABORATION_HERO_SET_RESPONSE'
export const PROJECT_ELABORATION_CONVERSATION_DETAILS = 'PROJECT_ELABORATION_CONVERSATION_DETAILS'
export const PROJECT_ELABORATION_CONVERSATION_CURRENT = createRequestTypes('PROJECT_ELABORATION_CONVERSATION_CURRENT')
export const PROJECT_ELABORATION_CONVERSATION_REPLY = createRequestTypes('PROJECT_ELABORATION_CONVERSATION_REPLY')
export const PROJECT_ELABORATION_CONVERSATION_SET_RESPONSE = 'PROJECT_ELABORATION_CONVERSATION_SET_RESPONSE'
export const PROJECT_ELABORATION_CONVERSATIONS_DETAILS = createRequestTypes('PROJECT_ELABORATION_CONVERSATIONS_DETAILS')
export const PROJECT_ELABORATION_CONVERSATIONS_SELECT = createRequestTypes('PROJECT_ELABORATION_CONVERSATIONS_SELECT')
export const PROJECT_ELABORATION_CLICK_FIND_A_PRO = 'PROJECT_ELABORATION_CLICK_FIND_A_PRO'
export const PROJECT_ELABORATION_SET_SLUG_USED = 'PROJECT_ELABORATION_SET_SLUG_USED'

export const projectElaborationHeroDetails = {
  request: () => (actionTypes(PROJECT_ELABORATION_HERO_DETAILS.REQUEST)),
  success: payload => (actionTypes(PROJECT_ELABORATION_HERO_DETAILS.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_ELABORATION_HERO_DETAILS.FAILURE, { error })),
}

export const setProjectElaborationHeroAnswer = (text, payload) => ({
  type: PROJECT_ELABORATION_HERO_SET_RESPONSE,
  payload: {
    text,
    payload,
  },
})

export const projectElaborationReply = {
  request: (text, payload) => (actionTypes(PROJECT_ELABORATION_CONVERSATION_REPLY.REQUEST, { text, payload })),
  success: payload => (actionTypes(PROJECT_ELABORATION_CONVERSATION_REPLY.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_ELABORATION_CONVERSATION_REPLY.FAILURE, { error })),
}

export const projectElaborationConversationsDetails = {
  request: () => (actionTypes(PROJECT_ELABORATION_CONVERSATIONS_DETAILS.REQUEST)),
  success: payload => (actionTypes(PROJECT_ELABORATION_CONVERSATIONS_DETAILS.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_ELABORATION_CONVERSATIONS_DETAILS.FAILURE, { error })),
}

export const setProjectElaborationSessionId = sessionId => ({
  type: PROJECT_ELABORATION_SET_SESSION_ID,
  payload: sessionId,
})

export const setProjectElaborationConversationAnswer = text => ({
  type: PROJECT_ELABORATION_CONVERSATION_SET_RESPONSE,
  payload: text,
})

export const clickOnFindAPro = () => ({
  type: PROJECT_ELABORATION_CLICK_FIND_A_PRO,
})

export const projectElaborationConversationsSelect = {
  request: authType => (actionTypes(PROJECT_ELABORATION_CONVERSATIONS_SELECT.REQUEST, { authType })),
  success: payload => (actionTypes(PROJECT_ELABORATION_CONVERSATIONS_SELECT.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_ELABORATION_CONVERSATIONS_SELECT.FAILURE, { error })),
}

export const projectElaborationConversationCurrent = {
  request: () => (actionTypes(PROJECT_ELABORATION_CONVERSATION_CURRENT.REQUEST)),
  success: payload => (actionTypes(PROJECT_ELABORATION_CONVERSATION_CURRENT.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_ELABORATION_CONVERSATION_CURRENT.FAILURE, { error })),
}

export const projectElaborationConversationDetails = authType => ({
  type: PROJECT_ELABORATION_CONVERSATION_DETAILS,
  payload: authType,
})

export const projectElaborationReset = {
  type: PROJECT_ELABORATION_RESET,
}

export const projectElaborationResetConversation = {
  type: PROJECT_ELABORATION_RESET_CONVERSATION,
}

export const projectElaborationPreValidate = {
  request: chatbotStorageId => (actionTypes(PROJECT_ELABORATION_PRE_VALIDATE.REQUEST, { chatbotStorageId })),
  success: payload => (actionTypes(PROJECT_ELABORATION_PRE_VALIDATE.SUCCESS, { payload })),
  failure: error => (actionTypes(PROJECT_ELABORATION_PRE_VALIDATE.FAILURE, { error })),
}

export const setSlugUsed = value => ({
  type: PROJECT_ELABORATION_SET_SLUG_USED,
  payload: value,
})
