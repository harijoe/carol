import * as authActions from '../auth'

const login = (credentials) => {
  return (dispatch) => {
    return authActions.getToken('password', dispatch, credentials)
  }
}

export default login
