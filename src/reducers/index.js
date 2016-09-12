import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import UserReducer from './reducer-users'
import ActiveUserReducer from './reducer-active-user'
import AuthReducer from './reducer-auth'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer,
  auth: AuthReducer,
  routing: routerReducer
})

export default allReducers
