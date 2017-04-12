import { call, fork, put, take, select } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import cookie from 'react-cookie'
import { push } from 'react-router-redux'

import config from 'config'
import { takeLatest } from 'utils/effects'
import {
  resetUser,
  projectElaborationReset,
  projectElaborationConversationCurrent,
  projectElaborationConversationsDetails,
  projectElaborationHeroDetails,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  authLogin,
} from 'store/actions'
import { fromAuth } from 'store/selectors'
import { fetchWithoutRefreshingToken } from 'sagas/fetch'
import { requestChannel, responseChannel } from 'sagas/refreshToken'
import saveToken from 'sagas/saveToken'
import removeToken from 'sagas/removeToken'
import getPathname from '../routing/selectors'

/*
  returns :
    - true if a token has been successfully fetched
    - false if an error occured
    - ${token} if nothing has been done because a token is already in the cookies
 */
export function* handleAuthLoginRequest({ grantType = 'client_credentials', formName = null, credentials = '' } = {}) {
  try {
    const token = yield cookie.load('access_token')

    if (credentials === '' && token != null) {
      // Notice: Token is expected to already be in the state thanks to SSR, there is nothing more to do
      return token
    }

    const url = `/oauth/v2/token?client_id=${config.api.clientId}&client_secret=${config.api.clientSecret}&grant_type=${grantType}${credentials}`

    yield* fetchWithoutRefreshingToken(authLogin(grantType), 'get', url)
    yield* saveToken(grantType)

    if (yield select(fromAuth.isAuthenticated)) {
      if ((yield select(getPathname)) === 'project-elaboration') {
        yield put(projectElaborationConversationCurrent.request())
      } else {
        yield put(projectElaborationConversationsDetails.request())
      }
    }

    return true
  } catch ({ _error }) {
    if (formName != null) {
      yield put(stopSubmit(formName, { _error }))
    }

    return false
  }
}

function* handleAuthLogout() {
  yield* removeToken()
  yield put(resetUser())
  yield put(projectElaborationReset)

  if ((yield select(getPathname)) === '/') {
    yield put(projectElaborationHeroDetails.request())
  } else {
    yield put(push('/'))
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
    const payload = yield take(requestChannel)
    const authSuccessful = yield call(handleAuthLoginRequest, payload)

    yield put(responseChannel, authSuccessful)
  }
}

export default function* () {
  yield [
    takeLatest(AUTH_LOGIN.REQUEST, handleAuthLoginRequest),
    takeLatest(AUTH_LOGOUT, handleAuthLogout),
    fork(watchAuthChannelRequest),
  ]
}
