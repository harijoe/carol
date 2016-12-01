import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AuthReducer from '../services/auth/ducks/reducer'
import ContentsReducer from '../containers/ContentsList/ducks'
import prosReducer from '../containers/pro/ProList/ducks'
import proReducer from '../containers/pro/Pro/ducks'
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
  pro: proReducer,
  contents: ContentsReducer,
  user: userReducer,
  signup: signupReducer,
  country: countryReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  routing: routerReducer
})
