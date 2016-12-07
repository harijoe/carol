import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import config from '../../../config'
import { LOGIN_BAD_REQUEST, LOGIN_ERROR, TOKEN_ERROR, USER_LOGOUT, AUTH_TOKEN } from './actionTypes'
import storage from '../../../utils/storage'
import { getCurrentLocale } from '../../../utils/locale'

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

export const saveTokens = (accessToken, refreshToken) => {
  storage.setItem('access_token', accessToken)
  storage.setItem('refresh_token', refreshToken)
  storage.setItem('grant_type', refreshToken ? 'password' : 'client_credentials')
}

/** global initHeader */
const initHeader = {
  Accept: 'application/ld+json',
  'Accept-Language': getCurrentLocale()
}

export const request = (url, method, accessToken = null, data = null) => {
  const headers = () => {
    if (accessToken) {
      initHeader.Authorization = `Bearer ${accessToken}`
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
      saveTokens(response.data.access_token, response.data.refresh_token)

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
      token = storage.getItem('access_token')
    }

    if ('undefined' === token || null === token) {
      token = getNewToken(grantType, dispatch, credentials)
    }

    resolve(token)
  })
}

export const saveTokensSaga = (accessToken, refreshToken, grantType) => {
  storage.setItem('access_token', accessToken)
  storage.setItem('refresh_token', refreshToken)
  storage.setItem('grant_type', grantType)
}

function* getNewTokenSaga(grantType, credentials = null) {
  try {
    const response = yield call(
      request,
      `${config.apiUrl}/oauth/v2/token?client_id=${config.clientId}&client_secret=${config.clientSecret}&grant_type=${grantType}&${credentials}`,
      'GET'
    )

    yield call(saveTokensSaga, response.data.access_token, response.data.refresh_token, grantType)
    yield put(receiveToken('password'))

    return response.data.access_token
  } catch (error) {
    if ('password' === grantType) {
      return yield put(loginFailure(error))
    }

    return yield put(receiveTokenError(error))
  }
}

export const getTokenSaga = (grantType, credentials = null) => {
  const token = storage.getItem('access_token')

  if (!credentials && token) {
    return token
  }

  return getNewTokenSaga(grantType, credentials)
}

export const login = (credentials) => {
  return (dispatch) => {
    return getToken('password', dispatch, credentials)
  }
}

export function logout() {
  storage.removeItem('access_token')
  storage.removeItem('refresh_token')
  storage.removeItem('grant_type')
  storage.removeItem('access_token_expires')

  return {
    type: USER_LOGOUT
  }
}
