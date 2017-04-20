import { CONTEXT_SET_COUNTRY, CONTEXT_SET_LANG, CONTEXT_TOGGLE_POPIN_NAV, CONTEXT_TOGGLE_POPIN_ACCOUNT, CONTEXT_CLOSE_ALL_POPIN, CONTEXT_SET_SSR } from './actions'
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
    case CONTEXT_TOGGLE_POPIN_NAV: {
      return {
        ...state,
        popinNavigation: action.payload != null ? action.payload : !state.popinNavigation,
      }
    }
    case CONTEXT_TOGGLE_POPIN_ACCOUNT: {
      return {
        ...state,
        popinAccount: action.payload != null ? action.payload : !state.popinAccount,
      }
    }
    case CONTEXT_CLOSE_ALL_POPIN: {
      return {
        ...state,
        popinNavigation: false,
        popinAccount: false,
      }
    }
    case CONTEXT_SET_SSR: {
      return {
        ...state,
        ssr: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
