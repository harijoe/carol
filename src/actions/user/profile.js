import { request, getToken } from '../auth'
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
  return (dispatch) => {
    return getToken('password').then((token) => {
      if (null === token) {
        return {
          type: types.USER_UNAUTHORIZED
        }
      }

      return request(config.profileUrl, 'GET', token)
    })
      .then((response) => {
        dispatch(receiveUserInfo(response.data))
      })
      .catch((response) => {
        dispatch(receiveError(response.status))
      })
  }
}

export const updateProfile = (data, id) => {
  return (dispatch) => {
    return getToken('password').then((token) => {
      return request(`${config.baseUrl}${id}`, 'PUT', token, data)
    })
      .then(() => {
        dispatch(receiveUserInfo({ '@id': id, username: data.username, email: data.email }))
      })
      .catch((response) => {
        dispatch(receiveError(response.status))
      })
  }
}
