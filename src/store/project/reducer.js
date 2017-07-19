import { USER_RESET } from 'store/actions'
import { PROJECT_LIST, PROJECT_DETAILS, PROJECT_UPDATE } from './actions'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_LIST.SUCCESS:
      return {
        ...state,
        list: action.payload['hydra:member'],
      }
    case PROJECT_UPDATE.SUCCESS:
    case PROJECT_DETAILS.SUCCESS:
      return {
        ...state,
        [action.payload['@id']]: action.payload,
      }
    case USER_RESET:
      return {
        ...initialState,
      }
    default: {
      return state
    }
  }
}
