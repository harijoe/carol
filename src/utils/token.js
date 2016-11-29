import storage from './storage'
import { generateToken } from './api'

const getUnixTime = () => {
  return Date.now() / 1000 | 0
}

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

  return generateToken(grantType, isCredentials)
    .then((response) => {
      saveTokens(response.data.access_token, response.data.refresh_token, response.data.expires_in)

      return Promise.resolve(response.data.access_token)
    })
    .catch((error) => {
      return Promise.reject(new Error(error))
    })
}

export const getToken = (grantType = 'client_credentials', credentials = null) => {
  let token = null

  return new Promise((resolve) => {
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

    resolve(token)
  })
}
