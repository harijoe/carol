import { put, call, select } from 'redux-saga/effects'

import { fromAuth, fromContext } from 'store/selectors'
import getCacheStorage from 'sagas/ssr/cache'
import api from 'services/api'
import { removeToken } from 'sagas/token'
import logging from 'logging'
import refreshToken from '../refreshToken'

/*
  Tries to use cached responses during ssr
 */
function* fetchUsingCache(method, url, settings, data) {
  const cache = getCacheStorage(settings.lang)
  const cacheKey = method + url
  const cachedResponse = cache[cacheKey]

  if (cachedResponse != null) {
    console.info(`  response from cache — size: ${cachedResponse.toString().length}`)

    return cachedResponse
  }

  const response = yield call(api[method], url, settings, data)

  cache[cacheKey] = response

  return response
}

export function* fetchWithoutRefreshingToken(actions, method, url, settings = {}, data = null, actionParams = null, allowCaching = true) {
  const lang = yield select(fromContext.getLocale)
  const accessToken = yield select(fromAuth.getAccessToken)

  try {
    console.info(`fetching — ${url} ${lang} ${accessToken != null ? `— with token — ${accessToken.substr(0, 6)}...` : ''}`)

    let response
    const ssr = yield select(fromContext.isSSR)

    if (!ssr || !allowCaching) {
      response = yield call(api[method], url, { ...settings, lang, accessToken }, data)
    } else {
      response = yield* fetchUsingCache(method, url, { ...settings, lang, accessToken }, data)
    }

    yield put(actions.success(response, actionParams))
  } catch (e) {
    logging.captureException(e, { method, url, settings, lang, data })
    console.error('FAILURE - ', url)

    yield put(actions.failure(e, actionParams))

    if (e.status === 401) {
      yield* removeToken()
    }

    throw e
  }
}

export default function*(actions, method, url, settings = {}, data = null, actionParams = null) {
  // dryRun is used to prevent unwanted fetches during SSR
  const dryRun = yield select(fromContext.isDryRun)

  if (dryRun) {
    return
  }

  yield* refreshToken()
  yield* fetchWithoutRefreshingToken(actions, method, url, settings, data, actionParams)
}
