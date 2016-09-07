import axios from 'axios'
// import Config from '../config'

export const login = (credentials) => {
  axios
    .get(this.getAuthEndpoint('password')
      + '&username=' + credentials.username
      + '&password=' + credentials.password
    )
    .then(response => {
      console.log(response);
      /* this.saveTokens(response.data)

      return axios.get(Config.apiUrl + '/me') */
    })
    .then(response => {
      // this.loginSuccess(response.data.user)
      console.log('success', response);
    })
    .catch(response => {
      this.loginError(response)
    })
}
