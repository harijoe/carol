import axios from 'axios'
import { auth as types } from '../constants/actionTypes'
import config from '../config'

const receiveBadRequest = () => {
  return {
    type: types.LOGIN_BAD_REQUEST
  }
}

const loginFailure = (response) => {
  if (400 === response.status) {
    return receiveBadRequest()
  }

  return {
    type: types.LOGIN_ERROR
  }
}

export const receiveToken = (grantType) => {
  return {
    type: types.AUTH_TOKEN,
    grantType
  }
}

const receiveTokenError = (response) => {
  return {
    type: types.TOKEN_ERROR,
    response
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

export const request = (url, method, accessToken = null, data = null) => {
  const headers = () => {
    if (accessToken) {
      return {
        Accept: 'application/ld+json',
        Authorization: `Bearer ${accessToken}`
      }
    }

    return {
      Accept: 'application/ld+json'
    }
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

const getNewToken = (grantType, dispatch, credentials = null) => {
  if ('password' === grantType && null === credentials) {
    return null
  }

  const isCredentials = (credentials) ? `&username=${credentials.username}&password=${credentials.password}` : ''
  return request(
    `${config.apiUrl}/oauth/v2/token?client_id=${config.clientId}&client_secret=${config.clientSecret}&grant_type=${grantType}${isCredentials}`,
    'GET'
  )
    .then((response) => {
      saveTokens(response.data)

      if ('password' === grantType) {
        dispatch(receiveToken('password'))
      }

      return response.data.access_token
    })
    .catch((error) => {
      if ('password' === grantType) {
        return dispatch(loginFailure(error))
      }

      return dispatch(receiveTokenError(error))
    })
}

export const getToken = (grantType, dispatch, credentials = null) => {
  let token = null

  return new Promise((resolve) => {
    if (!credentials) {
      token = localStorage.getItem('access_token')
    }

    if ('undefined' === token || null === token) {
      token = getNewToken(grantType, dispatch, credentials)
    }

    resolve(token)
  })
}
