import { initialState } from './selectors'
import {
  PROJECT_ELABORATION_CONVERSATION_REPLY,
  PROJECT_ELABORATION_SET_SESSION_ID,
  PROJECT_ELABORATION_CONVERSATION_SET_RESPONSE,
  PROJECT_ELABORATION_HERO_DETAILS,
  PROJECT_ELABORATION_HERO_SET_RESPONSE,
  PROJECT_ELABORATION_CONVERSATIONS_DETAILS,
  PROJECT_ELABORATION_CONVERSATION_DETAILS,
} from './actions'

const addQuestions = (activeConversation, questions) => {
  const updatedConversation = activeConversation.slice()

  questions.map(question => (
    updatedConversation.push({ message: question.message })
  ))

  return updatedConversation
}

const addResponse = (activeConversation, response) => {
  const updatedConversation = activeConversation.slice()

  updatedConversation[activeConversation.length - 1].response = {
    text: response,
  }

  return updatedConversation
}

const setHeroResponse = (hero, { text, payload }) => {
  const updatedHero = hero.slice()

  updatedHero[hero.length - 1].response = {
    text,
    payload,
  }

  return updatedHero
}

const removeHeroResponse = (hero) => {
  const updatedHero = hero.slice()

  updatedHero[hero.length - 1].response = {
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

  updatedHero = removeHeroResponse(updatedHero)

  return updatedHero
}

export default (state = initialState, action) => {
  const payload = action.payload

  switch (action.type) {
    case PROJECT_ELABORATION_CONVERSATION_SET_RESPONSE:
      return {
        ...state,
        activeConversation: addResponse(state.activeConversation, action.payload),
      }
    case PROJECT_ELABORATION_CONVERSATION_REPLY.SUCCESS:
      return {
        ...state,
        activeConversation: addQuestions(state.activeConversation, Object.values(action.payload)),
      }
    case PROJECT_ELABORATION_SET_SESSION_ID:
      return {
        ...state,
        sessionId: action.payload,
      }
    case PROJECT_ELABORATION_HERO_SET_RESPONSE:
      return {
        ...state,
        hero: setHeroResponse(state.hero, action.payload),
      }
    case PROJECT_ELABORATION_HERO_DETAILS.SUCCESS:
      return {
        ...state,
        hero: setHero(state.hero, Object.values(action.payload)),
      }
    case PROJECT_ELABORATION_CONVERSATIONS_DETAILS.SUCCESS:
      if (Object.keys(payload).length === 1) {
        return {
          ...state,
          activeConversation: payload[Object.keys(payload)[0]].conversation,
          sessionId: payload[Object.keys(payload)[0]].sessionId,
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
    default:
      return state
  }
}
