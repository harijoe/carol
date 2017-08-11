import { initialState } from './selectors'
import {
  SEARCH_ENGINE_SET_RESULTS,
  SEARCH_ENGINE_SEARCH,
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ENGINE_SEARCH:
      return {
        ...state,
        query: action.query,
      }
    case SEARCH_ENGINE_SET_RESULTS:
      return {
        ...state,
        results: action.results,
      }
    default:
      return state
  }
}
