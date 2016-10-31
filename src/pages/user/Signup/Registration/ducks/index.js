import { getToken, request } from '../../../../../services/auth/ducks'
import config from '../../../../../config'

/*
Const
 */
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
const SIGNUP_ERROR = 'SIGNUP_ERROR'

/*
Actions
 */
const receiveSuccess = (response) => {
  return {
    type: SIGNUP_SUCCESS,
    response
  }
}

const receiveError = (response) => {
  return {
    type: SIGNUP_ERROR,
    response
  }
}

export const postSignup = (data) => {
  return (dispatch) => {
    return getToken('client_credentials')
      .then((token) => {
        const postData = {
          username: data.email,
          email: data.email,
          password: data.password,
          phone: data.phone
        }

        return request(`${config.apiUrl}/users`, 'POST', token, postData)
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

const signupReducer = (state = initialState, action) => {
  // TODO: waiting for error normalization
  const response = action.response

  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        status: action.response.status
      }
    case SIGNUP_ERROR:
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
