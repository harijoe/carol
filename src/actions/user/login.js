import axios from 'axios'
import * as authActions from '../auth'
import Config from '../../config'
import { login as types } from '../../constants/actionTypes'

const getAuthEndpoint = (grantType = 'password') => {
  return `${Config.apiUrl}/oauth/v2/token?client_id=${Config.clientId}&client_secret=${Config.clientSecret}&grant_type=${grantType}`
}

const receiveBadRequest = () => {
  return { type: types.LOGIN_BAD_REQUEST }
}

const loginSuccess = (data, dispatch) => {
  authActions.saveTokens(data)
  dispatch(authActions.receiveToken(data))
}

const loginFailure = (response, dispatch) => {
  if (400 === response.status) {
    dispatch(receiveBadRequest())
  }
}

const login = (credentials) => {
  return function(dispatch) {
    return axios({
      url: `${getAuthEndpoint('password')}&username=${credentials.username}&password=${credentials.password}`,
      timeout: 20000,
      method: 'GET',
      responseType: 'json',
    })
      .then((response) => {
        loginSuccess(response.data, dispatch)
      })
      .catch((response) => {
        loginFailure(response, dispatch)
      })
  }
}

export default login
