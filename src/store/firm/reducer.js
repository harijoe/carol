import { initialState } from './selectors'
import { FIRM_LIST_SUCCESS, FIRM_DETAILS_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRM_LIST_SUCCESS: {
      return {
        ...state,
        list: action.list,
      }
    }
    case FIRM_DETAILS_SUCCESS: {
      return {
        ...state,
        [action.data.guid]: action.data,
      }
    }
    default: {
      return state
    }
  }
}
