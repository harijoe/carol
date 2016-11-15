import axios from 'axios'
import config from '../../../config'
import { LOGIN_BAD_REQUEST, LOGIN_ERROR, TOKEN_ERROR, USER_LOGOUT, AUTH_TOKEN } from './actionTypes'

/** global: localStorage */

/*
 Actions
 */
const receiveBadRequest = () => {
  return {
    type: LOGIN_BAD_REQUEST
  }
}

const loginFailure = (response) => {
  if (400 === response.status) {
    return receiveBadRequest()
  }

  return {
    type: LOGIN_ERROR
  }
}

export const receiveToken = (grantType) => {
  return {
    type: AUTH_TOKEN,
    grantType
  }
}

const receiveTokenError = (response) => {
  return {
    type: TOKEN_ERROR,
    response
  }
}

export const saveTokens = ({ access_token, refresh_token }) => {
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
}

/** global initHeader */
const initHeader = {
  Accept: 'application/ld+json'
}

export const request = (url, method, accessToken = null, data = null, localeHeader = null) => {
  const headers = () => {
    if (accessToken) {
      initHeader.Authorization = `Bearer ${accessToken}`
    }

    if (localeHeader) {
      initHeader['X-LOCALE'] =  localeHeader
    }

    return initHeader
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

export const getTokenSaga = (grantType, dispatch, credentials = null) => {
  const token = localStorage.getItem('access_token')

  if (!credentials && token) {
    return token
  }

  return getNewToken(grantType, dispatch, credentials)
}

export const login = (credentials) => {
  return (dispatch) => {
    return getToken('password', dispatch, credentials)
  }
}

export function logout() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')

  return {
    type: USER_LOGOUT
  }
}
