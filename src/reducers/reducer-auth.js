import * as types from '../constants/actionTypes'

const reducerAuth = (state = null, action) => {
  const payload = action.payload

  switch (action.type) {
    case types.auth.AUTH_TOKEN:
      return {
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token
      }
    case types.login.LOGIN_BAD_REQUEST:
      return {
        error: 'Votre login et/ou mot de passe sont invalides'
      }
    default:
      return state
  }
}

export default reducerAuth
