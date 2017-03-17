import { CONTEXT_SET_COUNTRY, CONTEXT_SET_LANG, CONTEXT_TOGGLE_FULLSCREEN_NAV } from './actions'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTEXT_SET_COUNTRY: {
      return {
        ...state,
        country: action.payload,
      }
    }
    case CONTEXT_SET_LANG: {
      return {
        ...state,
        lang: action.payload,
      }
    }
    case CONTEXT_TOGGLE_FULLSCREEN_NAV: {
      return {
        ...state,
        fullscreenNavigation: action.payload != null ? action.payload : !state.fullscreenNavigation,
      }
    }
    default: {
      return state
    }
  }
}
