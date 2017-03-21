import { initialState } from './selectors'
import { POST_LIST } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LIST.SUCCESS: {
      return {
        ...state,
        [action.actionParams.scope]: action.payload['hydra:member'],
      }
    }
    default: {
      return state
    }
  }
}
