import { call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import cookie from 'react-cookie'
import { stopSubmit } from 'redux-form'

import config from 'config'
import { resetUser } from 'store/actions'
import { rawFetch as fetch } from 'sagas/fetch'
import { requestChannel, responseChannel } from 'sagas/refreshToken'
import { AUTH_LOGIN, AUTH_LOGOUT, authLogin } from './actions'

export function* handleAuthLoginRequest({ grantType = 'client_credentials', formName, credentials = '' } = {}) {
  const token = yield cookie.load('access_token')

  if (credentials === '' && token != null) {
    return null
  }

  const url = `/oauth/v2/token?client_id=${config.api.clientId}&client_secret=${config.api.clientSecret}&grant_type=${grantType}${credentials}`

  return yield* fetch(authLogin(grantType, formName), null, 'get', url)
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
  yield [
    cookie.remove('access_token'),
    cookie.remove('refresh_token'),
    cookie.remove('grant_type'),
  ]

  yield put(resetUser())
}

function* handleAuthLoginFailure({ formName, error }) {
  yield put(stopSubmit(formName, { _error: error }))
}

function* watchAuthRequest() {
  yield takeLatest(AUTH_LOGIN.REQUEST, handleAuthLoginRequest)
}

function* watchAuthSuccess() {
  yield takeEvery(AUTH_LOGIN.SUCCESS, handleAuthLoginSuccess)
}

function* watchAuthFailure() {
  yield takeEvery(AUTH_LOGIN.FAILURE, handleAuthLoginFailure)
}

function* watchAuthLogout() {
  yield takeEvery(AUTH_LOGOUT, handleAuthLogout)
}

/*
 Channels are a feature of redux-saga — https://goo.gl/B0s6aG

 They are used here to avoid calling multiple times the getToken api
 - watchAuthChannelRequest : Watches incoming token requests and process them *one by one*
 */
function* watchAuthChannelRequest() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const payload = yield take(requestChannel)

    yield call(handleAuthLoginRequest, payload)
    yield put(responseChannel, {})
  }
}

export default function* () {
  yield [
    fork(watchAuthRequest),
    fork(watchAuthChannelRequest),
    fork(watchAuthSuccess),
    fork(watchAuthLogout),
    fork(watchAuthFailure),
  ]
}
