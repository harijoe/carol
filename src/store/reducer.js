import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'reapop'

const reducers = {
  routing,
  notifications,
  form,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const storeName = key.replace(/\.\/(.+)\/.+$/, '$1')

  reducers[storeName] = req(key).default
})

export default combineReducers(reducers)
