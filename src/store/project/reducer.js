import { PROJECT_SUBMIT, PROJECT_LIST } from './actions'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_SUBMIT.SUCCESS: {
      return {
        ...state,
        status: true,
      }
    }
    case PROJECT_SUBMIT.FAILURE: {
      return {
        ...state,
        status: false,
      }
    }
    case PROJECT_LIST.SUCCESS: {
      return {
        ...state,
        list: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
