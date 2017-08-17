import {
  CONTEXT_SET_COUNTRY,
  CONTEXT_SET_LANG,
  CONTEXT_TOGGLE_MAIN_NAVIGATION,
  CONTEXT_TOGGLE_ACCOUNT_NAVIGATION,
  CONTEXT_TOGGLE_SIGN_IN_POPIN,
  CONTEXT_TOGGLE_CHATBOT_POPIN_MODE,
  CONTEXT_TOGGLE_CHATBOT_POPIN,
  CONTEXT_CLOSE_ALL,
  CONTEXT_SET_SSR,
  CONTEXT_SET_DRY_RUN,
  CONTEXT_SET_INITIAL_QUERY_PARAMS,
  CONTEXT_REMOVE_INITIAL_QUERY_PARAM,
  CONTEXT_ENABLE_FEATURE,
} from './actions'
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
    case CONTEXT_TOGGLE_CHATBOT_POPIN: {
      return {
        ...state,
        chatbotPopin: {
          ...state.chatbotPopin,
          enabled: action.payload != null ? action.payload : !state.chatbotPopin.enabled,
        },
      }
    }
    case CONTEXT_TOGGLE_CHATBOT_POPIN_MODE: {
      return {
        ...state,
        chatbotPopin: {
          ...state.chatbotPopin,
          mode: state.chatbotPopin.mode === 'signin' ? 'signup' : 'signin',
        },
      }
    }
    case CONTEXT_CLOSE_ALL: {
      return {
        ...state,
        mainNavigation: false,
        accountNavigation: false,
        signInPopin: false,
        chatbotPopin: {
          ...state.chatbotPopin,
          enabled: false,
        },
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
    case CONTEXT_SET_INITIAL_QUERY_PARAMS: {
      return {
        ...state,
        initialQueryParams: action.payload,
      }
    }
    case CONTEXT_REMOVE_INITIAL_QUERY_PARAM: {
      return {
        ...state,
        initialQueryParams: { ...state.initialQueryParams, [action.payload]: null },
      }
    }
    case CONTEXT_ENABLE_FEATURE: {
      return {
        ...state,
        features: { ...state.features, [action.payload]: true },
      }
    }
    default: {
      return state
    }
  }
}
