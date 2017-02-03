import { PROJECT_SUBMIT_SUCCESS, PROJECT_SUBMIT_FAILURE, PROJECT_LIST_SUCCESS } from './actions'
import { initialState } from './selectors'

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
    case PROJECT_LIST_SUCCESS: {
      return {
        ...state,
        list: action.list,
      }
    }
    default: {
      return state
    }
  }
}
