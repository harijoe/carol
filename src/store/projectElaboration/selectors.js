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
      answer: {
        text: null,
        payload: null,
      },
    },
  ],
  activeConversation: [],
  conversations: {},
  projectName: null,
  projectId: null,
}

export const getConversation = (state = initialState) => state.activeConversation
export const hasActiveConversation = (state = initialState) => {
  const activeConversation = getConversation(state)

  if (activeConversation.length > 0) {
    return activeConversation[0].answer != null && activeConversation[0].answer.text !== null
  }

  return false
}
export const getConversations = (state = initialState) => state.conversations
export const hasConversations = (state = initialState) => Object.keys(getConversations(state)).length > 1
export const getSessionId = (state = initialState) => state.sessionId
export const getFirstChoices = (state = initialState) => state.hero[1].message.attachment.payload.elements
export const getHeroAnswer = (state = initialState) => state.hero[1].answer
export const getPostalCode = (state = initialState) => state.activeConversation.find(element => element.message.text != null && element.message.text.indexOf('postal') !== -1 && element.answer.text)
export const getHero = (state = initialState) => state.hero
export const getProjectName = (state = initialState) => state.projectName
export const getProjectId = (state = initialState) => state.projectId
