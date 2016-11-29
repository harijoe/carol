import { postForgotPassword } from '../../../../utils/api'

/*
Const
 */
const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR'

/*
Actions
 */
const receiveSuccess = (response) => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    response
  }
}

const receiveError = (response) => {
  return {
    type: FORGOT_PASSWORD_ERROR,
    response
  }
}

export const postData = (data) => {
  return (dispatch) => {
    return postForgotPassword({ email: data.email })
      .then((response) => {
        dispatch(receiveSuccess(response))

        return response
      })
      .catch((response) => {
        dispatch(receiveError(response))

        return response
      })
  }
}

/*
Reducer
 */
const initialState = {
  status: 0,
  error: null
}

const forgotPasswordReducer = (state = initialState, action) => {
  const response = action.response

  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        status: action.response.status
      }
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        status: action.response.status,
        error: response.message
      }
    default:
      return state
  }
}

export default forgotPasswordReducer
