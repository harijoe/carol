import { initialState } from './selectors'
import {
  PROJECT_ELABORATION_CONVERSATION_REPLY,
  PROJECT_ELABORATION_SET_SESSION_ID,
  PROJECT_ELABORATION_CONVERSATION_SET_RESPONSE,
  PROJECT_ELABORATION_HERO_DETAILS,
  PROJECT_ELABORATION_HERO_SET_RESPONSE,
  PROJECT_ELABORATION_CONVERSATIONS_DETAILS,
  PROJECT_ELABORATION_CONVERSATION_DETAILS,
  PROJECT_ELABORATION_RESET_CONVERSATION,
  PROJECT_ELABORATION_PRE_VALIDATE,
} from './actions'

const addQuestions = (activeConversation, questions) => {
  const updatedConversation = activeConversation.slice()

  questions.map(question => (
    updatedConversation.push({ message: question.message })
  ))

  return updatedConversation
}

const addAnswer = (activeConversation, answer) => {
  const updatedConversation = activeConversation.slice()

  updatedConversation[activeConversation.length - 1].answer = {
    text: answer,
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

const removeHeroAnswer = (hero) => {
  const updatedHero = hero.slice()

  updatedHero[hero.length - 1].answer = {
    text: null,
    payload: null,
  }

  return updatedHero
}

const setHero = (hero, questions) => {
  let updatedHero = hero.slice()

  questions.map((question, i) => (
    updatedHero[i] = { message: question.message }
  ))

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
        sessionId: action.payload,
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
      if (Object.keys(payload).length === 1) {
        return {
          ...state,
          activeConversation: payload[Object.keys(payload)[0]].conversation,
          sessionId: payload[Object.keys(payload)[0]].sessionId,
          tracking: payload[Object.keys(payload)[0]].tracking,
        }
      }

      if (Object.keys(payload).length > 1) {
        return {
          ...state,
          conversations: payload,
        }
      }

      return {
        ...state,
        activeConversation: [],
        conversations: {},
      }
    case PROJECT_ELABORATION_CONVERSATION_DETAILS:
      return {
        ...state,
        activeConversation: state.conversations[payload].conversation,
        sessionId: state.conversations[payload].sessionId,
        conversations: {},
      }
    case PROJECT_ELABORATION_RESET_CONVERSATION:
      return {
        ...state,
        activeConversation: [],
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
