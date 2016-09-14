import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'
import Config from '../../config'
import allReducers from '../../reducers'

const middleware = routerMiddleware(browserHistory)
const store = createStore(allReducers, applyMiddleware(thunk, middleware))

const profile = () => {
  console.log('hello')
  if (null === localStorage.getItem('access_token')) {
    store.dispatch(push('/login'))
  }

  return axios({
    url: Config.profileUrl,
    timeout: 20000,
    method: 'GET',
    responseType: 'json',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch(() => {
      console.log('profile error')
    })
}

export default profile
