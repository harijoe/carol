import { getToken, request } from '../../../../services/auth/ducks'
import config from '../../../../config'

/*
Const
 */
const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR'

/*
Actions
 */
const receiveSuccess = (response) => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    response
  }
}

const receiveError = (response) => {
  return {
    type: RESET_PASSWORD_ERROR,
    response
  }
}

export const postResetPassword = (data) => {
  return (dispatch) => {
    return getToken('client_credentials')
      .then((token) => {
        const postData = {
          password: data.password
        }

        return request(`${config.apiUrl}/forgot-password/${data.tokenResetPassword}`, 'POST', token, postData)
      })
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

const resetPasswordReducer = (state = initialState, action) => {
  const response = action.response

  switch (action.type) {
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        status: action.response.status
      }
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        status: action.response.status,
        error: response.message
      }
    default:
      return state
  }
}

export default resetPasswordReducer
