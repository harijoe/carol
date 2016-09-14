import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'
import * as authActions from '../auth'
import Config from '../../config'
import { login as types } from '../../constants/actionTypes'
import allReducers from '../../reducers'

const middleware = routerMiddleware(browserHistory)
const store = createStore(allReducers, applyMiddleware(thunk, middleware))
const dispatch = store.dispatch

const getAuthEndpoint = (grantType = 'password') => {
  return `${Config.apiUrl}/oauth/v2/token?client_id=${Config.clientId}&client_secret=${Config.clientSecret}&grant_type=${grantType}`
}

const receiveBadRequest = () => {
  return { type: types.LOGIN_BAD_REQUEST }
}

const loginSuccess = (data) => {
  console.log('login success')
  authActions.saveTokens(data)
  dispatch(authActions.receiveToken(data))
  store.dispatch(push('/profile'))
}

const loginFailure = (response) => {
  if (400 === response.status) {
    store.dispatch(receiveBadRequest())
    console.log('Bad request')
  }
}

const login = (credentials) => {
  return axios({
    url: `${getAuthEndpoint('password')}&username=${credentials.username}&password=${credentials.password}`,
    timeout: 20000,
    method: 'GET',
    responseType: 'json',
  })
    .then((response) => {
      loginSuccess(response.data)
    })
    .catch((response) => {
      loginFailure(response)
    })
}

export default login
