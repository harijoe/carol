import { fork, put, take, select } from 'redux-saga/effects'
import { stopSubmit, reset } from 'redux-form'
import cookie from 'services/cookies'
import { push } from 'react-router-redux'
import notify from 'sagas/notify'
import { saveToken, removeToken } from 'sagas/token'
import generateSessionId from 'utils/generateSessionId'
import { saveProjectElaborationIdInCookies } from 'store/utils'
import { takeLatest } from 'utils/effects'
import config from 'config'

import {
  resetUser,
  projectElaborationHeroDetails,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  authLogin,
  closeAll,
  setAccessToken,
  setRedirectPathname,
  projectElaborationResetConversation,
  setProjectElaborationSessionId,
} from 'store/actions'
import { fromAuth, fromRouting } from 'store/selectors'
import { fetchWithoutRefreshingToken } from 'sagas/fetch'
import { requestChannel, responseChannel } from 'sagas/refreshToken'
import { handleGetUserRequest } from '../user/sagas'

/*
  returns :
    - true if a token has been successfully fetched
    - false if an error occured
    - ${token} if nothing has been done because a token is already in the cookies
 */
export function* handleAuthLoginRequest({ grantType = 'client_credentials', formName = null, credentials = '' } = {}) {
  try {
    let actualGrantType = grantType
    let actualCredentials = credentials
    const token = cookie.get('access_token')
    const refreshToken = cookie.get('refresh_token')

    if (credentials === '' && token != null) {
      const currentToken = yield select(fromAuth.getAccessToken)

      if (token !== true && token !== currentToken) {
        yield put(setAccessToken(token))
      }

      return token
    }

    if (token == null && refreshToken != null) {
      actualGrantType = 'refresh_token'
      actualCredentials = `&refresh_token=${refreshToken}`
    }

    const url = `/oauth/v2/token?client_id=${config.api.clientId}&client_secret=${config.api
      .clientSecret}&grant_type=${actualGrantType}${actualCredentials}`

    yield* fetchWithoutRefreshingToken(authLogin(actualGrantType), 'get', url)

    yield* saveToken(actualGrantType)

    yield put(reset(formName))

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
  yield put(projectElaborationResetConversation)

  const sessionId = generateSessionId()
  saveProjectElaborationIdInCookies(sessionId)

  yield put(setProjectElaborationSessionId(sessionId))

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
    yield* notify('', 'user.sign_in.success')
    yield* handleGetUserRequest()

    const redirectPathname = yield select(fromRouting.getRedirectPathname)
    if (redirectPathname) {
      yield put(push(redirectPathname))
      yield put(setRedirectPathname(null))
    }
  }
}

function* handleAuthLoginFailed() {
  yield* removeToken()
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

export default function*() {
  yield [
    takeLatest(AUTH_LOGIN.REQUEST, handleAuthLoginRequest),
    takeLatest(AUTH_LOGIN.SUCCESS, handleAuthLoginSuccess),
    takeLatest(AUTH_LOGIN.FAILURE, handleAuthLoginFailed),
    takeLatest(AUTH_LOGOUT, handleAuthLogout),
    fork(watchAuthChannelRequest),
  ]
}
