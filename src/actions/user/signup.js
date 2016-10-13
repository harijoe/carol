import { user as types } from '../../constants/actionTypes'
import { getToken, request } from '../auth'
import config from '../../config'

const receiveSuccess = (response) => {
  return {
    type: types.SIGNUP_SUCCESS,
    response
  }
}

const receiveError = (response) => {
  return {
    type: types.SIGNUP_ERROR,
    response
  }
}

const postSignup = (data) => {
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

export default postSignup
