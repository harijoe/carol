import * as authActions from '../auth'
import config from '../../config'
import { user as types } from '../../constants/actionTypes'

const receiveUserInfo = (payload) => {
  return {
    type: types.USER_INFO,
    payload
  }
}
const receiveError = (statusCode) => {
  if (401 === statusCode) {
    return {
      type: types.USER_UNAUTHORIZED
    }
  }

  return {
    type: types.USER_ERROR
  }
}

export const getProfile = () => {
  const accessToken = authActions.getToken('password')

  if (null === accessToken) {
    return {
      type: types.USER_UNAUTHORIZED
    }
  }

  return function(dispatch) {
    return authActions
      .request(accessToken, config.profileUrl, 'GET')
      .then((response) => {
        dispatch(receiveUserInfo(response.data))
      })
      .catch((response) => {
        dispatch(receiveError(response.status))
      })
  }
}

export const updateProfile = (data, id) => {
  return function(dispatch) {
    return authActions
      .request(authActions.getToken('password'), `${config.baseUrl}${id}`, 'PUT', data)
      .then(() => {
        dispatch(receiveUserInfo({ '@id': id, username: data.username, email: data.email }))
      })
      .catch((response) => {
        dispatch(receiveError(response.status))
      })
  }
}
