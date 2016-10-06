import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AuthReducer from './auth'
import contentReducer from './content'
import prosReducer from './pros'
import userReducer from './user'
import signupReducer from './signup'
import countryReducer from './country'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default combineReducers({
  auth: AuthReducer,
  pros: prosReducer,
  content: contentReducer,
  user: userReducer,
  signup: signupReducer,
  country: countryReducer,
  routing: routerReducer
})
