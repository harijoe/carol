import * as authActions from '../auth'
import { login as types } from '../../constants/actionTypes'
import navigate from '../navigate'

const receiveBadRequest = () => {
  return { type: types.LOGIN_BAD_REQUEST }
}

const loginSuccess = (data, dispatch) => {
  dispatch(authActions.receiveToken(data))
  navigate('/profile')
}

const loginFailure = (response, dispatch) => {
  if (400 === response.status) {
    dispatch(receiveBadRequest())
  }
}

const login = (credentials) => {
  return function(dispatch) {
    return authActions.getToken('password', credentials)
      .then((response) => {
        loginSuccess(response, dispatch)
      })
      .catch((response) => {
        loginFailure(response, dispatch)
      })
  }
}

export default login
