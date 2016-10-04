import * as types from '../constants/actionTypes'

const signupReducer = (state = null, action) => {
  switch (action.type) {
    case types.user.SIGNUP_SUCCESS:
      return {
        ok: true
      }
    case types.user.SIGNUP_ERROR:
      return {
        error: 'Une erreur s\'est produite, merci de réessayer plus tard'
      }
    default:
      return state
  }
}

export default signupReducer
