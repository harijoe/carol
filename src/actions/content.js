import axios from 'axios'
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
    return axios({
      url: `${config.apiUrl}/posts?access_token=${auth.getToken('client_credentials')}`,
      method: 'GET',
      responseType: 'json'
    })
      .then((response) => {
        onSuccess(response.data['hydra:member'], dispatch)
      })
      .catch((response) => {
        onError(response, dispatch)
      })
  }
}

export default getContent
