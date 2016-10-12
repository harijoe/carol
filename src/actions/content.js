import { content as types } from '../constants/actionTypes'
import { getToken, request } from './auth'
import config from '../config'

const receiveSuccess = (content) => {
  return {
    type: types.CONTENT_RECEIVE,
    content
  }
}

const receiveError = () => {
  return {
    type: types.CONTENT_ERROR
  }
}

const getContent = () => {
  return (dispatch) => {
    return getToken('client_credentials')
      .then((token) => {
        return request(`${config.apiUrl}/posts`, 'GET', token)
      })
      .then((response) => {
        dispatch(receiveSuccess(response.data['hydra:member']))
      })
      .catch(() => {
        dispatch(receiveError())
      })
  }
}

export default getContent
