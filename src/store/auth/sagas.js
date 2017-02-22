import { call, fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import cookie from 'react-cookie'

import api from 'services/api'
import fetch from 'utils/fetchSagas'
import { AUTH_LOGIN, AUTH_LOGOUT, authLogin } from './actions'

export function* getAuth({ grantType, credentials, resolve, reject } = {}) {
  const token = yield cookie.load('access_token')

  if (!credentials && token && token !== 'undefined') {
    return resolve({ access_token: token })
  }

  return yield call(fetch, authLogin(grantType), null, resolve, reject, 'generateToken', grantType, credentials)
}

function* saveAuth(token) {
  const { accessToken, refreshToken, grantType, expiresIn } = token.payload

  yield [
    cookie.save('access_token', accessToken, { path: '/', maxAge: expiresIn, secure: true }),
    cookie.save('refresh_token', refreshToken, { secure: true }),
    cookie.save('grant_type', grantType, { path: '/', maxAge: expiresIn, secure: true }),
  ]
}

function* removeAuth() {
  yield api.unsetToken()

  yield [
    cookie.remove('access_token'),
    cookie.remove('refresh_token'),
    cookie.remove('grant_type'),
  ]
}

function* watchAuthRequest() {
  yield call(takeEvery, AUTH_LOGIN.REQUEST, getAuth)
}

function* watchAuthSuccess() {
  yield call(takeEvery, AUTH_LOGIN.SUCCESS, saveAuth)
}

function* watchAuthLogout() {
  yield call(takeEvery, AUTH_LOGOUT, removeAuth)
}

export default function* () {
  yield [
    fork(watchAuthRequest),
    fork(watchAuthSuccess),
    fork(watchAuthLogout),
  ]
}
