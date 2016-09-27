import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'
import * as authActions from '../auth'
import config from '../../config'
import allReducers from '../../reducers'
import { user as types } from '../../constants/actionTypes'

const middleware = routerMiddleware(browserHistory)
const store = createStore(allReducers, applyMiddleware(thunk, middleware))

const receiveUserInfo = (payload) => {
  return {
    type: types.USER_INFO,
    payload
  }
}
const receiveError = (statusCode, dispatch) => {
  if (401 === statusCode) {
    dispatch({
      type: types.USER_UNAUTHORIZED
    })
  }
}

const profile = () => {
  const accessToken = authActions.getToken('password')

  if (null === accessToken) {
    store.dispatch(push('/login'))
  }

  return function(dispatch) {
    return axios({
      url: config.profileUrl,
      timeout: config.timeout,
      method: 'GET',
      responseType: 'json',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        dispatch(receiveUserInfo(response.data))
      })
      .catch((response) => {
        receiveError(response.status, dispatch)
      })
  }
}

export default profile
