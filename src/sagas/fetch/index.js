import { put, call, select } from 'redux-saga/effects'

import { fromAuth, fromContext } from 'store/selectors'
import getCacheStorage from 'sagas/ssr/cache'
import api from 'services/api'
import refreshToken from '../refreshToken'

/*
  Tries to use cached responses during ssr
 */
function* fetchUsingCache(method, url, settings, data) {
  const cachedResponse = getCacheStorage()[method + url]

  if (cachedResponse != null) {
    // @TODO: To remove before production
    console.info(`  response from cache — size: ${cachedResponse.toString().length}`)

    return cachedResponse
  }

  const response = yield call(api[method], url, settings, data)

  getCacheStorage()[method + url] = response

  return response
}

export function* fetchWithoutRefreshingToken(actions, method, url, settings = {}, data = null, actionParams = null, allowCaching = true) {
  const lang = yield select(fromContext.getLocale)
  const accessToken = yield select(fromAuth.getAccessToken)

  try {
    // @TODO: To remove before production
    console.info('fetching — ', url, ' — with token — ', accessToken)
    let response
    const ssr = yield select(fromContext.isSSR)

    if (!ssr || !allowCaching) {
      response = yield call(api[method], url, { ...settings, lang, accessToken }, data)
    } else {
      response = yield* fetchUsingCache(method, url, { ...settings, lang, accessToken }, data)
    }

    yield put(actions.success(response, actionParams))
  } catch (e) {
    yield put(actions.failure(e, actionParams))
    throw e
  }
}

export default function* (actions, method, url, settings = {}, data = null, actionParams = null) {
  yield* refreshToken()
  yield* fetchWithoutRefreshingToken(actions, method, url, settings, data, actionParams)
}
