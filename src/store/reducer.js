import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'reapop'

import post from './post/reducer'
import firm from './firm/reducer'
import status from './status/reducer'
import country from './country/reducer'
import auth from './auth/reducer'
import user from './user/reducer'
import projectElaboration from './projectElaboration/reducer'

const reducers = {
  routing,
  notifications,
  post,
  firm,
  form,
  status,
  country,
  auth,
  user,
  projectElaboration,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const storeName = key.replace(/\.\/(.+)\/.+$/, '$1')
  reducers[storeName] = req(key).default
})

export default combineReducers(reducers)
