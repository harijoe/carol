import { initialState } from './selectors'
import {
  PROJECT_ELABORATION_REPLY,
  PROJECT_ELABORATION_SET_USER,
  PROJECT_ELABORATION_SET_RESPONSE,
  PROJECT_ELABORATION_HERO_DETAILS,
  PROJECT_ELABORATION_HERO_SET_RESPONSE,
} from './actions'

const addQuestions = (conversation, questions) => {
  const updatedConversation = conversation.slice()

  questions.map(question => (
    updatedConversation.push({ message: question.message })
  ))

  return updatedConversation
}

const addResponse = (conversation, response) => {
  const updatedConversation = conversation.slice()

  updatedConversation[conversation.length - 1].response = {
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
  const updatedHero = hero.slice()

  questions.map((question, i) => (
    updatedHero[i] = { message: question.message }
  ))

  removeHeroResponse(hero)

  return updatedHero
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_ELABORATION_SET_RESPONSE:
      return {
        ...state,
        conversation: addResponse(state.conversation, action.payload),
      }
    case PROJECT_ELABORATION_REPLY.SUCCESS:
      return {
        ...state,
        conversation: addQuestions(state.conversation, Object.values(action.payload)),
      }
    case PROJECT_ELABORATION_SET_USER:
      return {
        ...state,
        user: action.payload,
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
    default:
      return state
  }
}
