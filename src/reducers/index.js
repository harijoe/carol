import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AuthReducer from './auth'
import contentReducer from './content'
import prosReducer from './pro/prosReducer'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default combineReducers({
  auth: AuthReducer,
  pros: prosReducer,
  content: contentReducer,
  routing: routerReducer
})
