import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'
import Config from '../config'
import * as types from '../constants/actionTypes'
import allReducers from '../reducers'

const middleware = routerMiddleware(browserHistory)
const store = createStore(allReducers, applyMiddleware(thunk, middleware))
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

/**
 * Save tokens in local storage and automatically add token within request
 * @param params
 */
const saveTokens = ({ access_token, refresh_token }) => {
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
}

const profile = (accessToken) => {
  return axios({
    url: Config.profileUrl,
    timeout: 20000,
    method: 'GET',
    responseType: 'json',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch(() => {
      console.log('profile error')
    })
}

const loginSuccess = (data) => {
  saveTokens(data)
  dispatch(receiveToken(data))
  profile(localStorage.getItem('access_token'))
  store.dispatch(push('/'))
}

const login = (credentials) => {
/*  if (localStorage.getItem('access_token')) {
    axios.defaults.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
  } */
  return axios({
    url: `${getAuthEndpoint('password')}&username=${credentials.username}&password=${credentials.password}`,
    timeout: 20000,
    method: 'GET',
    responseType: 'json',
    /* headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    } */
  })
    .then((response) => {
      loginSuccess(response.data)
    })
    .catch(() => {
      dispatch(receiveError())
    })
}

export default login
