import { fromJS } from 'immutable'
import { LOGIN_BAD_REQUEST, LOGIN_ERROR, USER_LOGOUT, AUTH_TOKEN } from './actionTypes'
import { getStoredAuthState } from '../../../utils/auth'

/**
 * Reducer
 */

const initialState = fromJS({
  grantType: null,
  error: null
})

const transform = (data, state) => {
  state = state.set('grantType', data.grantType || null)
  state = state.set('error', data.error || null)

  return state
}

const reducerAuth = (state = initialState.merge(getStoredAuthState()), action) => {
  switch (action.type) {
    case LOGIN_BAD_REQUEST:
      return transform({
        error: 'Votre login et/ou mot de passe sont invalides'
      }, state)
    case LOGIN_ERROR:
      return transform({
        error: 'Une erreur s\'est produite, merci de réessayer plus tard'
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
