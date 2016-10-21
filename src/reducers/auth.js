import { fromJS } from 'immutable'
import { auth as authTypes, user as userTypes } from '../constants/actionTypes'

const initialState = fromJS({
  grantType: null,
  error: null
})

const transform = (data, state) => {
  state = state.set('grantType', data.grantType || null)
  state = state.set('error', data.error || null)

  return state
}

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_BAD_REQUEST:
      return transform({
        error: 'Votre login et/ou mot de passe sont invalides'
      }, state)
    case authTypes.LOGIN_ERROR:
      return transform({
        error: 'Une erreur s\'est produite, merci de réessayer plus tard'
      }, state)
    case userTypes.USER_LOGOUT:
      return initialState
    default:
      return state
  }
}

export default reducerAuth
