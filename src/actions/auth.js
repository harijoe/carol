import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import Config from '../config'
import * as types from '../constants/actionTypes'
import allReducers from '../reducers'

const store = createStore(allReducers, applyMiddleware(thunk))
const dispatch = store.dispatch
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
  console.log(`${getAuthEndpoint('password')}&username=${credentials.username}&password=${credentials.password}`)
  return axios({
    url: `${getAuthEndpoint('password')}&username=${credentials.username}&password=${credentials.password}`,
    timeout: 20000,
    method: 'get',
    responseType: 'json'
  })
    .then((response) => {
      console.log('then')
      dispatch(receiveToken(response.data))
      /*
       return axios.get(Config.apiUrl + '/me') */
    })
    .catch((response) => {
      console.log(response)
      dispatch(receiveError())
    })
}

export default login
