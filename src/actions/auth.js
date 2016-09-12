import axios from 'axios'
import { createStore } from 'redux'
import Config from '../config'
import * as types from '../constants/actionTypes'
import authReducer from '../reducers/reducer-auth'

const store = createStore(authReducer, ['User Redux'])
const getAuthEndpoint = (grantType = 'password') => {
  return `${Config.apiUrl}/oauth/v2/token?client_id=${Config.clientId}&client_secret=${Config.clientSecret}&grant_type=${grantType}`
}

const receiveToken = (json) => {
  return {
    type: types.AUTH_TOKEN,
    payload: json
  }
}

const receiveError = () => {
  return { type: types.AUTH_ERROR }
}

const login = (credentials) => {
  return axios({
    url: `${getAuthEndpoint('password')}&username=${credentials.username}&password=${credentials.password}`,
    timeout: 20000,
    method: 'get',
    responseType: 'json'
  })
    .then((response) => {
      store.dispatch(receiveToken(response.data))
      /*
       return axios.get(Config.apiUrl + '/me') */
    })
    .catch((response) => {
      store.dispatch(receiveError(response.data))
    })
}

export default login
