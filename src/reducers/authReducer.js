import * as types from '../constants/actionTypes'

const reducerAuth = (state = null, action) => {
  switch (action.type) {
    case types.login.LOGIN_BAD_REQUEST:
      return {
        error: 'Votre login et/ou mot de passe sont invalides'
      }
    default:
      return state
  }
}

export default reducerAuth
