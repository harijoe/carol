import get from 'lodash/get'

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
  isNewConversation: false,
  conversations: {},
  projectName: null,
  projectId: null,
  postalCode: null,
  proFormId: null,
  proFormLabel: null,
  partner: {},
  key1: null,
  key2: null,
  enterKey: null,
}

export const getPartnerHeaderText = (state = initialState) => get(state, ['partner', 'headerText'])
export const getPartnerHeaderLink = (state = initialState) => get(state, ['partner', 'headerLink'])
export const getPartnerHeaderWebsite = (state = initialState) => get(state, ['partner', 'website'])
export const getConversations = (state = initialState) => state.conversations
export const getSessionId = (state = initialState) => state.sessionId
export const getFirstChoices = (state = initialState) => state.hero[1].message.attachment.payload.elements
export const getPostalCode = (state = initialState) => state.postalCode
export const getHero = (state = initialState) => state.hero
export const getProjectId = (state = initialState) => state.projectId
export const getProjectName = (state = initialState) => state.projectName
export const getProFormId = (state = initialState) => state.proFormId
export const getProFormLabel = (state = initialState) => state.proFormLabel
export const isNewConversation = (state = initialState) => state.isNewConversation

export const getConversation = (state = initialState) => state.activeConversation
export const hasActiveConversation = (state = initialState) => {
  const activeConversation = getConversation(state)
  return !!(activeConversation.length > 0 && activeConversation[0].answer && activeConversation[0].answer.text)
}

const getAnswersText = (state = initialState) => state.activeConversation.filter(data => data.answer).map(data => data.answer.text)
export const getHeroAnswer = (state = initialState) => getAnswersText(state)[0]
export const getKey2Label = (state = initialState) => getAnswersText(state)[1]
export const getKey1 = (state = initialState) => (!state.enterKey ? getAnswersText(state)[0] : state.key1)
export const getKey2 = (state = initialState) => (!state.enterKey ? getAnswersText(state)[1] : state.key2)
