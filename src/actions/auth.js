import axios from 'axios'
import { auth as types } from '../constants/actionTypes'
import config from '../config'

export const receiveToken = (grantType) => {
  return {
    type: types.AUTH_TOKEN,
    grantType
  }
}

/**
 * Save tokens in local storage and automatically add token within request
 * @param params
 */
export const saveTokens = ({ access_token, refresh_token }) => {
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
}

const getNewToken = (grantType, credentials = null) => {
  if ('password' === grantType && null === credentials) {
    return null
  }

  const isCredentials = (credentials) ? `&username=${credentials.username}&password=${credentials.password}` : ''
  return axios({
    url: `${config.apiUrl}/oauth/v2/token?client_id=${config.clientId}&client_secret=${config.clientSecret}&grant_type=${grantType}${isCredentials}`,
    timeout: config.timeout,
    method: 'GET',
    responseType: 'json'
  })
    .then((response) => {
      saveTokens(response.data)

      return response.data
    })
}

export const getToken = (grantType, credentials = null) => {
  let token = null

  if (!credentials) {
    token = localStorage.getItem('access_token')
  }

  if ('undefined' === token || null === token) {
    token = getNewToken(grantType, credentials)
  }

  return token
}

export const request = (accessToken, url, method, data = null) => {
  const headers = () => {
    if (accessToken) {
      return {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }

    return null
  }

  return axios({
    url,
    timeout: config.timeout,
    method,
    responseType: 'json',
    data,
    headers: headers()
  })
}
