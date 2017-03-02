import { initialState } from './selectors'
import { FIRM_LIST, FIRM_DETAILS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRM_LIST.SUCCESS: {
      return {
        ...state,
        list: action.payload['hydra:member'],
      }
    }
    case FIRM_DETAILS.SUCCESS: {
      const id = action.payload['@id'].split('/')[2]

      return {
        ...state,
        [id]: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
