import { fromJS } from 'immutable'
import { LOGIN_BAD_REQUEST, LOGIN_ERROR, USER_LOGOUT, AUTH_TOKEN } from './actionTypes'
import { getStoredAuthState } from '../../../utils/auth'
import transformErrors from '../../../utils/transformErrors'

/**
 * Reducer
 */

const initialState = fromJS({
  grantType: null,
  errors: []
})

const transform = ({ grantType = null, errors = [] }, state) => {
  return state
    .set('grantType', grantType)
    .set('errors', transformErrors(errors))
}

const reducerAuth = (state = initialState.merge(getStoredAuthState()), action) => {
  switch (action.type) {
    case LOGIN_BAD_REQUEST:
      return transform({
        errors: [{ message: 'user.invalid_login' }]
      }, state)
    case LOGIN_ERROR:
      return transform({
        errors: [{ message: 'server_error' }]
      }, state)
    case USER_LOGOUT:
      return initialState
    case AUTH_TOKEN:
      return transform({
        grantType: action.grantType
      }, state)
    default:
      return state
  }
}

export default reducerAuth
