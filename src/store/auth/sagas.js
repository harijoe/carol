import { call, fork, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import cookie from 'react-cookie'

import config from 'config'
import { resetUser } from 'store/actions'
import api from 'services/api'
import fetch from 'utils/fetchSagas'
import { AUTH_LOGIN, AUTH_LOGOUT, authLogin } from './actions'

export function* handleAuthLoginRequest({ grantType, credentials, resolve, reject } = {}) {
  const token = yield cookie.load('access_token')

  if (!credentials && token && token !== 'undefined') {
    return resolve({ access_token: token })
  }

  const url = `/oauth/v2/token?client_id=${config.api.clientId}&client_secret=${config.api.clientSecret}&grant_type=${grantType}${credentials}`

  return yield call(fetch, authLogin(grantType), null, resolve, reject, 'get', url)
}

function* handleAuthLoginSuccess(token) {
  const { accessToken, refreshToken, grantType, expiresIn } = token.payload
  const secure = location.protocol === 'https:'

  yield [
    cookie.save('access_token', accessToken, { path: '/', maxAge: expiresIn, secure }),
    cookie.save('refresh_token', refreshToken, { secure }),
    cookie.save('grant_type', grantType, { path: '/', maxAge: expiresIn, secure }),
  ]
}

function* handleAuthLogout() {
  yield api.unsetToken()

  yield [
    cookie.remove('access_token'),
    cookie.remove('refresh_token'),
    cookie.remove('grant_type'),
  ]

  yield put(resetUser())
}

function* watchAuthRequest() {
  yield call(takeEvery, AUTH_LOGIN.REQUEST, handleAuthLoginRequest)
}

function* watchAuthSuccess() {
  yield call(takeEvery, AUTH_LOGIN.SUCCESS, handleAuthLoginSuccess)
}

function* watchAuthLogout() {
  yield call(takeEvery, AUTH_LOGOUT, handleAuthLogout)
}

export default function* () {
  yield [
    fork(watchAuthRequest),
    fork(watchAuthSuccess),
    fork(watchAuthLogout),
  ]
}
