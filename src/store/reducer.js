import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'reapop'

import post from './post/reducer'
import firm from './firm/reducer'
import status from './status/reducer'

const reducers = {
  routing,
  notifications,
  post,
  firm,
  form,
  status,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const storeName = key.replace(/\.\/(.+)\/.+$/, '$1')
  reducers[storeName] = req(key).default
})

export default combineReducers(reducers)
