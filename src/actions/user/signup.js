import { user as types } from '../../constants/actionTypes'
import * as auth from '../auth'
import config from '../../config'

const receiveSuccess = (response) => {
  return {
    type: types.SIGNUP_SUCCESS,
    response
  }
}

const receiveError = (errors) => {
  return {
    type: types.SIGNUP_ERROR,
    errors
  }
}

const onSuccess = (response, dispatch) => {
  dispatch(receiveSuccess(response))
}

const onError = (response, dispatch) => {
  dispatch(receiveError(response))
}

const postSignup = (data) => {
  return function(dispatch) {
    return auth.getToken('client_credentials')
      .then((token) => {
        const postData = {
          username: data.email,
          email: data.email,
          password: data.password,
          phone: data.phone
        }

        return auth.request(token, `${config.apiUrl}/users`, 'POST', postData)
          .then((response) => {
            onSuccess(response.data, dispatch)
          })
          .catch((response) => {
            onError(response.data, dispatch)
          })
      })
  }
}

export default postSignup
