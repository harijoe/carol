import { fromJS } from 'immutable'
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
        return request(`${config.apiUrl}/users`, 'POST', token, data)
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
const initialState = fromJS({
  status: 0,
  error: null
})

const transform = (data, state) => {
  state = state.set('status', data.status || null)
  state = state.set('error', data.error || null)

  return state
}

const signupReducer = (state = initialState, action) => {
  // TODO: waiting for error normalization
  const response = action.response

  switch (action.type) {
    case SIGNUP_SUCCESS:
      return transform({ status: action.response.status }, state)
    case SIGNUP_ERROR:
      return transform({
        status: response.status,
        error: response.data.error_description ? response.data.error_description : response.data['hydra:description']
      }, state)
    default:
      return state
  }
}

export default signupReducer
