import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AuthReducer from '../services/auth/ducks/reducer'
import LatestProjectsOnMapReducer from '../containers/LatestProjectsOnMap/ducks'
import LatestProjectsResourcesReducer from '../containers/LatestProjectsResources/ducks'
import prosReducer from '../containers/pro/ducks'
import userReducer from '../pages/user/Profile/ducks'
import signupReducer from '../pages/user/Signup/Registration/ducks'
import countryReducer from '../containers/Country/ducks'
import forgotPasswordReducer from '../pages/user/ForgotPassword/ducks'
import resetPasswordReducer from '../pages/user/ResetPassword/ducks'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default combineReducers({
  auth: AuthReducer,
  pros: prosReducer,
  latestProjectsOnMap: LatestProjectsOnMapReducer,
  latestProjectsResources: LatestProjectsResourcesReducer,
  user: userReducer,
  signup: signupReducer,
  country: countryReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  routing: routerReducer
})
