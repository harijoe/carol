import { LOCALE_SET_COUNTRY, LOCALE_SET_LANG } from './actions'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCALE_SET_COUNTRY: {
      return {
        ...state,
        country: action.payload,
      }
    }
    case LOCALE_SET_LANG: {
      return {
        ...state,
        lang: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
