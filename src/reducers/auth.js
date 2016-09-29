import * as types from '../constants/actionTypes'

const transform = (grantType) => {
  return {
    grantType,
  }
}

const reducerAuth = (state = null, action) => {
  switch (action.type) {
    case types.login.LOGIN_BAD_REQUEST:
      return {
        error: 'Votre login et/ou mot de passe sont invalides'
      }
    case types.auth.AUTH_TOKEN:
      return transform(action.grantType)
    default:
      return state
  }
}

export default reducerAuth
