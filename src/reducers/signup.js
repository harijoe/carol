import { user as types } from '../constants/actionTypes'

const initialState = {
  status: 0,
  error: null
}

const signupReducer = (state = initialState, action) => {
  // TODO: waiting for error normalization
  const response = action.response

  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        status: action.response.status
      }
    case types.SIGNUP_ERROR:
      return {
        ...state,
        status: action.response.status,
        error: (response.data.error_description) ? response.data.error_description : response.data['hydra:description']
      }
    default:
      return state
  }
}

export default signupReducer
