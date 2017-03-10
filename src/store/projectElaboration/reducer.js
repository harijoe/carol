import { initialState } from './selectors'
import { PROJECT_ELABORATION_REPLY, PROJECT_ELABORATION_SET_USER } from './actions'

const addQuestions = (conversation, questions) => {
  const updatedConversation = conversation.slice()

  questions.map(question => (
    updatedConversation.push({ message: question.message })
  ))

  return updatedConversation
}

const addResponse = (conversation, response) => {
  const updatedConversation = conversation.slice()

  updatedConversation[conversation.length - 1].response = response

  return updatedConversation
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_ELABORATION_REPLY.REQUEST:
      return {
        ...state,
        conversation: addResponse(state.conversation, action.text),
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
    default:
      return state
  }
}
