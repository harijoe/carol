import * as authActions from '../auth'
import { user as types } from '../../constants/actionTypes'

const login = (credentials) => {
  return (dispatch) => {
    return authActions.getToken('password', dispatch, credentials)
  }
}

export const logout = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')

  return {
    type: types.USER_LOGOUT
  }
}

export default login
