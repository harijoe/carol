import { initialState } from './selectors'
import { PROJECT_ELABORATION_REPLY } from './actions'

const addQuestion = (conversation, questions, previousResponse) => {
  const updatedConversation = conversation

  updatedConversation[conversation.length - 1].response = previousResponse

  questions.map(question => (
    updatedConversation.push({ message: question.message })
  ))

  return updatedConversation
}

export default (state = initialState, action) => {
  const payload = action.payload

  switch (action.type) {
    case PROJECT_ELABORATION_REPLY.SUCCESS:
      return {
        ...state,
        answered: state.answered + 1,
        conversation: addQuestion(state.conversation, payload['hydra:member'], payload.previousResponse),
      }
    default:
      return state
  }
}
