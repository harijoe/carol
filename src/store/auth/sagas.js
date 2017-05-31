import { fork, put, take, select } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import cookie from 'react-cookie'
import { push } from 'react-router-redux'

import config from 'config'
import { takeLatest } from 'utils/effects'
import {
  resetUser,
  projectElaborationReset,
  projectElaborationHeroDetails,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  authLogin,
  closeAll,
  setAccessToken,
} from 'store/actions'
import { fromAuth, fromRouting } from 'store/selectors'
import { fetchWithoutRefreshingToken } from 'sagas/fetch'
import { requestChannel, responseChannel } from 'sagas/refreshToken'
import saveToken from 'sagas/saveToken'
import removeToken from 'sagas/removeToken'
import queryStringify from 'utils/queryStringify'
import { handleGetUserRequest } from '../user/sagas'

/*
  returns :
    - true if a token has been successfully fetched
    - false if an error occured
    - ${token} if nothing has been done because a token is already in the cookies
 */
export function* handleAuthLoginRequest({ grantType = 'client_credentials', formName = null, credentials = {} } = {}) {
  try {
    let actualGrantType = grantType
    let actualCredentials = credentials
    const token = cookie.load('access_token')
    const refreshToken = cookie.load('refresh_token')

    if (credentials === '' && token != null) {
      const currentToken = yield select(fromAuth.getAccessToken)

      if (token !== true && token !== currentToken) {
        yield put(setAccessToken(token))
      }

      return token
    }

    if (token == null && refreshToken != null) {
      actualGrantType = 'refresh_token'
      actualCredentials = { refresh_token: refreshToken }
    }

    const url = `/oauth/v2/token${queryStringify({
      client_id: config.api.clientId,
      client_secret: config.api.clientSecret,
      grant_type: actualGrantType,
      ...actualCredentials,
    })}`

    yield* fetchWithoutRefreshingToken(authLogin(actualGrantType), 'get', url, {}, null, null, false)

    yield* saveToken(actualGrantType)

    return true
  } catch (e) {
    if (formName != null) {
      // eslint-disable-next-line no-underscore-dangle
      yield put(stopSubmit(formName, { _error: e.message }))
    }

    throw e
  }
}

function* handleAuthLogout() {
  yield put(closeAll())
  yield* removeToken()
  yield put(resetUser())
  yield put(projectElaborationReset)
  const pathName = yield select(fromRouting.getPathname)

  if (pathName === '/') {
    yield put(projectElaborationHeroDetails.request())
  } else {
    yield put(push('/'))
  }
}

function* handleAuthLoginSuccess() {
  yield put(closeAll())
  const authenticated = yield select(fromAuth.isAuthenticated)

  if (authenticated) {
    yield* handleGetUserRequest()
  }
}

/*
 Channels are a feature of redux-saga — https://goo.gl/B0s6aG

 They are used here to avoid calling multiple times the getToken api
 - watchAuthChannelRequest : Watches incoming token requests and process them *one by one*
 */
function* watchAuthChannelRequest() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let authSuccessful = null
    const payload = yield take(requestChannel)

    try {
      authSuccessful = yield* handleAuthLoginRequest(payload)
    } catch (e) {
      authSuccessful = e
    }

    yield put(responseChannel, authSuccessful)
  }
}

export default function* () {
  yield [
    takeLatest(AUTH_LOGIN.REQUEST, handleAuthLoginRequest),
    takeLatest(AUTH_LOGIN.SUCCESS, handleAuthLoginSuccess),
    takeLatest(AUTH_LOGOUT, handleAuthLogout),
    fork(watchAuthChannelRequest),
  ]
}
