import { PROJECT_SUBMIT_SUCCESS, PROJECT_SUBMIT_FAILURE } from './actions'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_SUBMIT_SUCCESS: {
      return {
        ...state,
        status: true,
      }
    }
    case PROJECT_SUBMIT_FAILURE: {
      return {
        ...state,
        status: false,
      }
    }
    default: {
      return state
    }
  }
}
