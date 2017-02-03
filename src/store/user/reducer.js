import transformDate from 'utils/transformDate'
import { USER_DETAILS, USER_UPDATE } from './actions'
import { initialState } from './selectors'

export default function userReducer(state = initialState, action) {
  const payload = action.payload

  switch (action.type) {
    case USER_DETAILS.SUCCESS:
    case USER_UPDATE.SUCCESS:
      return {
        ...state,
        ...payload,
        birthday: transformDate(payload.birthday, 'dd/mm/yyyy'),
        imageUrl: payload.imageUrl || '',
      }
    default:
      return state
  }
}
