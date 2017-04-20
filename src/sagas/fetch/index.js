import { put, call, select } from 'redux-saga/effects'

import { fromAuth, fromContext } from 'store/selectors'
import getCacheStorage from 'sagas/ssr/cache'
import api from 'services/api'
import refreshToken from '../refreshToken'

/*
  Tries to use cached responses during ssr
 */
function* fetchUsingCache(method, url, settings, data) {
  const ssr = yield select(fromContext.isSSR)

  if (ssr) {
    const cachedResponse = getCacheStorage()[method + url]

    if (cachedResponse == null) {
      const response = yield call(api[method], url, settings, data)

      getCacheStorage()[method + url] = response

      return response
    }

    return cachedResponse
  }

  return yield call(api[method], url, settings, data)
}

export function* fetchWithoutRefreshingToken(actions, method, url, settings = {}, data = null, actionParams = null) {
  const lang = yield select(fromContext.getLocale)
  const accessToken = yield select(fromAuth.getAccessToken)

  try {
    const response = yield* fetchUsingCache(method, url, { ...settings, lang, accessToken }, data)

    yield put(actions.success(response, actionParams))
  } catch (e) {
    yield put(actions.failure(e, actionParams))
    throw e
  }
}

export default function* (actions, payload, method, url, settings = {}, data = null) {
  yield* refreshToken()
  yield* fetchWithoutRefreshingToken(actions, payload, method, url, settings, data)
}
