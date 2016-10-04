import * as authActions from '../auth'

const login = (credentials) => {
  return function(dispatch) {
    return authActions.getToken('password', dispatch, credentials)
  }
}

export default login
