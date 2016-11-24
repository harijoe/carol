import { fromJS } from 'immutable'
import { createUser } from '../../../../../utils/api'
import { getToken } from '../../../../../services/auth/ducks'
import transformErrors from '../../../../../utils/transformErrors'

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

export const callApiUserCreate = (data) => {
  return (dispatch) => {
    return getToken('client_credentials')
      .then((token) => {
        return createUser(token, data)
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
  errors: []
})

const transform = ({ status = null, errors = [] }, state) => {
  return state
    .set('status', status)
    .set('errors', transformErrors(errors))
}

const signupReducer = (state = initialState, action) => {
  // TODO: waiting for error normalization
  const response = action.response

  switch (action.type) {
    case SIGNUP_SUCCESS:
      return transform({
        status: action.response.status
      }, state)
    case SIGNUP_ERROR:
      return transform({
        status: response.status,
        errors: response.data.violations ? response.data.violations : [{ message: 'server_error' }]
      }, state)
    default:
      return state
  }
}

export default signupReducer
