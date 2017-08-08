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
  postalCode: null,
  proFormId: null,
  proFormLabel: null,
  partner: {},
}

export const getConversation = (state = initialState) => state.activeConversation
export const getPartnerHeaderText = (state = initialState) => state.partner.headerText
export const getPartnerHeaderLink = (state = initialState) => state.partner.headerLink
export const hasActiveConversation = (state = initialState) => {
  const activeConversation = getConversation(state)
  return activeConversation.length > 0 && activeConversation[0].answer && activeConversation[0].answer.text
}
export const getConversations = (state = initialState) => state.conversations
export const getSessionId = (state = initialState) => state.sessionId
export const getFirstChoices = (state = initialState) => state.hero[1].message.attachment.payload.elements
export const getHeroAnswer = (state = initialState) => state.hero[1].answer
export const getPostalCode = (state = initialState) => state.postalCode
export const getHero = (state = initialState) => state.hero
export const getProjectId = (state = initialState) => state.projectId
export const getProjectName = (state = initialState) => state.projectName
export const getProFormId = (state = initialState) => state.proFormId
export const getProFormLabel = (state = initialState) => state.proFormLabel
