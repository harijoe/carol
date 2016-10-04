import { content as types } from '../constants/actionTypes'
import * as auth from './auth'
import config from '../config'

const loadContent = (content) => {
  return {
    type: types.CONTENT_RECEIVE,
    content
  }
}

const error = () => {
  return {
    type: types.CONTENT_ERROR
  }
}

const onSuccess = (data, dispatch) => {
  dispatch(loadContent(data))
}

const onError = (response, dispatch) => {
  dispatch(error())
}

const getContent = () => {
  return function(dispatch) {
    return auth.getToken('client_credentials')
      .then((token) => {
        return auth.request(token, `${config.apiUrl}/posts`, 'GET')
          .then((response) => {
            onSuccess(response.data['hydra:member'], dispatch)
          })
          .catch((response) => {
            onError(response.data, dispatch)
          })
      })
  }
}

export default getContent
