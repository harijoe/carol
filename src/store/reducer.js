import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as createReapopReducer } from 'reapop'
import auth from './auth/reducer'
import context from './context/reducer'
import firm from './firm/reducer'
import post from './post/reducer'
import project from './project/reducer'
import projectElaboration from './projectElaboration/reducer'
import routing from './routing/reducer'
import searchEngine from './searchEngine/reducer'
import status from './status/reducer'
import user from './user/reducer'

const notifications = createReapopReducer({
  status: 'info',
  position: 'tr',
  dismissible: true,
  dismissAfter: 5000,
  allowHTML: true,
  closeButton: false,
})

const reducers = {
  notifications,
  form,
  auth,
  context,
  firm,
  post,
  project,
  projectElaboration,
  routing,
  searchEngine,
  status,
  user,
}

export default combineReducers(reducers)
