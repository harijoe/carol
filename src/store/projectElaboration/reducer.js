import { initialState } from './selectors'
import {
  PROJECT_ELABORATION_CONVERSATION_REPLY,
  PROJECT_ELABORATION_SET_SESSION_ID,
  PROJECT_ELABORATION_CONVERSATION_SET_RESPONSE,
  PROJECT_ELABORATION_HERO_DETAILS,
  PROJECT_ELABORATION_HERO_SET_RESPONSE,
  PROJECT_ELABORATION_CONVERSATIONS_DETAILS,
  PROJECT_ELABORATION_RESET_CONVERSATION,
  PROJECT_ELABORATION_SET_IS_NEW_CONVERSATION,
  PROJECT_ELABORATION_PRE_VALIDATE,
  PROJECT_ELABORATION_PARTNER,
} from './actions'

const addQuestions = (activeConversation, questions) => {
  const updatedConversation = activeConversation.slice()

  questions.map(question => updatedConversation.push({ message: question.message }))

  return updatedConversation
}

const addAnswer = (activeConversation, answer) => {
  const updatedConversation = activeConversation.slice()

  if (activeConversation.length > 0) {
    updatedConversation[activeConversation.length - 1].answer = {
      text: answer,
    }
  }

  return updatedConversation
}

const setHeroAnswer = (hero, { text, payload }) => {
  const updatedHero = hero.slice()

  updatedHero[hero.length - 1].answer = {
    text,
    payload,
  }

  return updatedHero
}

const removeHeroAnswer = hero => {
  const updatedHero = hero.slice()

  updatedHero[hero.length - 1].answer = {
    text: null,
    payload: null,
  }

  return updatedHero
}

const setHero = (hero, questions) => {
  let updatedHero = hero.slice()

  questions.forEach((question, i) => { updatedHero[i] = { message: question.message } })

  updatedHero = removeHeroAnswer(updatedHero)

  return updatedHero
}

export default (state = initialState, action) => {
  const payload = action.payload

  switch (action.type) {
    case PROJECT_ELABORATION_CONVERSATION_SET_RESPONSE:
      return {
        ...state,
        activeConversation: addAnswer(state.activeConversation, payload),
      }
    case PROJECT_ELABORATION_CONVERSATION_REPLY.SUCCESS:
      return {
        ...state,
        activeConversation: addQuestions(state.activeConversation, Object.values(payload)),
      }
    case PROJECT_ELABORATION_SET_SESSION_ID:
      return {
        ...state,
        sessionId: payload,
        activeConversation: [],
      }
    case PROJECT_ELABORATION_HERO_SET_RESPONSE:
      return {
        ...state,
        hero: setHeroAnswer(state.hero, payload),
      }
    case PROJECT_ELABORATION_HERO_DETAILS.SUCCESS:
      return {
        ...state,
        hero: setHero(state.hero, Object.values(payload)),
      }
    case PROJECT_ELABORATION_CONVERSATIONS_DETAILS.SUCCESS:
      if (payload.conversation) {
        return {
          ...state,
          activeConversation: payload.conversation,
          partner: payload.partner,
        }
      }

      return {
        ...state,
        activeConversation: [],
        conversations: {},
      }
    case PROJECT_ELABORATION_RESET_CONVERSATION:
      return {
        ...state,
        activeConversation: [],
      }
    case PROJECT_ELABORATION_SET_IS_NEW_CONVERSATION:
      return {
        ...state,
        isNewConversation: payload,
      }
    case PROJECT_ELABORATION_PARTNER.SUCCESS: {
      const partner = action.payload['hydra:member'][0]
      return {
        ...state,
        partner,
      }
    }
    case PROJECT_ELABORATION_PRE_VALIDATE.SUCCESS:
      return {
        ...state,
        projectName: payload.name,
        projectId: payload['@id'],
        postalCode: payload.postalCode.postalCode,
        proFormId: payload.proForm.legacyId,
        proFormLabel: payload.proForm.label,
      }
    default:
      return state
  }
}
