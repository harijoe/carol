export const initialState = {
  sessionId: null,
  hero: [
    {
      message: {
        text: null,
        quick_replies: [],
      },
    },
    {
      message: {
        attachment: {
          type: null,
          payload: {
            template_type: null,
            elements: [],
          },
        },
      },
      response: {
        text: null,
        payload: null,
      },
    },
  ],
  activeConversation: [],
  conversations: {},
}

export const getConversation = (state = initialState) => state.activeConversation
export const hasActiveConversation = (state = initialState) => {
  const activeConversation = getConversation(state)

  if (activeConversation.length > 0) {
    return activeConversation[0].response != null && activeConversation[0].response.text !== null
  }

  return false
}
export const getConversations = (state = initialState) => state.conversations
export const hasConversations = (state = initialState) => Object.keys(getConversations(state)).length > 1
export const getSessionId = (state = initialState) => state.sessionId
export const getFirstChoices = (state = initialState) => state.hero[1].message.attachment.payload.elements
export const getHeroResponse = (state = initialState) => state.hero[1].response
export const getHero = (state = initialState) => state.hero
