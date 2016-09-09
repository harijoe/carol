import axios from 'axios'
import Config from '../config'
import * as types from '../constants/actionTypes'

const getAuthEndpoint = (grantType = 'password') => {
  return `http://api-fake/app_dev.php/api/oauth/v2/token?
    client_id=${Config.clientId}
    &client_secret=${Config.clientSecret}
    &grant_type=${grantType}`
}

const receiveToken = () => {
  return { type: types.AUTH_TOKEN }
}

const receiveError = () => {
  return { type: types.AUTH_ERROR }
}

export const login = (credentials) => {
  return function(dispatch) {
    return axios
      .get(`${getAuthEndpoint('password')}
      &username=${credentials.username}
      &password=${credentials.password}`)
      .then((response) => {
        dispatch(receiveToken(response.data))
        console.log(response)
        /* this.saveTokens(response.data)

         return axios.get(Config.apiUrl + '/me') */
      })
      .then((response) => {
        // this.loginSuccess(response.data.user)
        console.log('success', response)
      })
      .catch((response) => {
        dispatch(receiveError(response.data))
        console.log(response)
        // this.loginError(response)
      })
  }
}

export default login
