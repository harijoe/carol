import { PROJECT_SUBMIT, PROJECT_LIST, PROJECT_DETAILS, PROJECT_UPDATE } from './actions'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_SUBMIT.SUCCESS:
      return {
        ...state,
        status: true,
      }
    case PROJECT_SUBMIT.FAILURE:
      return {
        ...state,
        status: false,
      }
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
    default: {
      return state
    }
  }
}
