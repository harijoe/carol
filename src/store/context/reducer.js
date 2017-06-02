import { CONTEXT_SET_COUNTRY, CONTEXT_SET_LANG, CONTEXT_TOGGLE_MAIN_NAVIGATION, CONTEXT_TOGGLE_ACCOUNT_NAVIGATION, CONTEXT_TOGGLE_SIGN_IN_POPIN, CONTEXT_CLOSE_ALL, CONTEXT_SET_SSR, CONTEXT_SET_DRY_RUN } from './actions'
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
    case CONTEXT_TOGGLE_MAIN_NAVIGATION: {
      return {
        ...state,
        mainNavigation: action.payload != null ? action.payload : !state.mainNavigation,
      }
    }
    case CONTEXT_TOGGLE_ACCOUNT_NAVIGATION: {
      return {
        ...state,
        accountNavigation: action.payload != null ? action.payload : !state.accountNavigation,
      }
    }
    case CONTEXT_TOGGLE_SIGN_IN_POPIN: {
      return {
        ...state,
        signInPopin: action.payload != null ? action.payload : !state.signInPopin,
      }
    }
    case CONTEXT_CLOSE_ALL: {
      return {
        ...state,
        mainNavigation: false,
        accountNavigation: false,
        signInPopin: false,
      }
    }
    case CONTEXT_SET_SSR: {
      return {
        ...state,
        ssr: action.payload,
      }
    }
    case CONTEXT_SET_DRY_RUN: {
      return {
        ...state,
        dryRun: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
