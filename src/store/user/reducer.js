import { USER_DETAILS, USER_UPDATE, USER_RESET } from './actions'
import { initialState } from './selectors'

export default function userReducer(state = initialState, action) {
  const payload = action.payload

  switch (action.type) {
    case USER_DETAILS.SUCCESS:
    case USER_UPDATE.SUCCESS:
      return {
        ...state,
        ...payload,
        imageUrl: payload.imageUrl || '',
      }
    case USER_RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
