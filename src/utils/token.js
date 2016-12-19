import storage from 'services/storage'
import api from 'services/api'

const getUnixTime = () => Date.now() / 1000 || 0

const saveTokens = (accessToken, refreshToken, expiresIn) => {
  storage.setItem('access_token', accessToken)
  storage.setItem('access_token_expires', getUnixTime() + expiresIn)
  storage.setItem('refresh_token', refreshToken)
  storage.setItem('grant_type', refreshToken ? 'password' : 'client_credentials')
}

export const getNewToken = (grantType, credentials = null) => {
  if ('password' === grantType && null === credentials) {
    return null
  }

  const isCredentials = (credentials) ? `&username=${credentials.username}&password=${credentials.password}` : ''

  return api.generateToken(grantType, isCredentials)
    .then((response) => {
      saveTokens(response.access_token, response.refresh_token, response.expires_in)

      return Promise.resolve(response.access_token)
    })
    .catch(error => Promise.reject(new Error(error)))
}

export const getToken = (grantType = 'client_credentials', credentials = null) => {
  let token = null

  if (!credentials) {
    token = storage.getItem('access_token')
  }

  if ('undefined' === token || null === token) {
    token = getNewToken(grantType, credentials)
  }

  const tokenExpire = storage.getItem('access_token_expires') || 0

  if (0 <= getUnixTime() - tokenExpire) {
    token = getNewToken(grantType, credentials)
  }

  return token
}
