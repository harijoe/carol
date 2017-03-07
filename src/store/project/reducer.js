import { PROJECT_SUBMIT, PROJECT_LIST, PROJECT_DETAILS } from './actions'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_SUBMIT.SUCCESS: {
      return {
        ...state,
        status: true,
      }
    }
    case PROJECT_SUBMIT.FAILURE: {
      return {
        ...state,
        status: false,
      }
    }
    case PROJECT_LIST.SUCCESS: {
      return {
        ...state,
        list: action.payload['hydra:member'],
      }
    }
    case PROJECT_DETAILS.SUCCESS: {
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
