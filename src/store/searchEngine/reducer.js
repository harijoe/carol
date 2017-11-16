import { CONTEXT_TOGGLE_SEARCH_MODAL } from 'store/context/actions'
import { initialState } from './selectors'
import { SEARCH_ENGINE_SET_RESULTS, SEARCH_ENGINE_SEARCH, SEARCH_ENGINE_SET_CATEGORY } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ENGINE_SEARCH:
      return {
        ...state,
        query: action.query,
      }
    case SEARCH_ENGINE_SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case CONTEXT_TOGGLE_SEARCH_MODAL:
      return {
        ...state,
        query: initialState.query,
      }
    case SEARCH_ENGINE_SET_RESULTS: {
      if (!action.payload) {
        return {
          ...state,
          ...{
            category: null,
            results: null,
          },
        }
      }

      const { hits, nbHits, indexName } = action.payload
      return {
        ...state,
        results: {
          ...state.results,
          [indexName]: { hits, nbHits },
        },
      }
    }
    default:
      return state
  }
}
