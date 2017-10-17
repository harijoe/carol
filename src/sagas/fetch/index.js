import { put, call, select } from 'redux-saga/effects'

import { fromAuth, fromContext } from 'store/selectors'
import api from 'services/api'
import { removeToken } from 'sagas/token'
import logging from 'logging'
import refreshToken from '../refreshToken'

export function* fetchWithoutRefreshingToken(actions, method, url, settings = {}, data = null, actionParams = null) {
  const lang = yield select(fromContext.getLocale)
  const accessToken = yield select(fromAuth.getAccessToken)

  try {
    console.info(`fetching — ${url} ${lang} ${accessToken != null ? `— with token — ${accessToken.substr(0, 6)}...` : ''}`)

    const response = yield call(api[method], url, { ...settings, lang, accessToken }, data)

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

export default function* (actions, method, url, settings = {}, data = null, actionParams = null) {
  // dryRun is used to prevent unwanted fetches during SSR
  const dryRun = yield select(fromContext.isDryRun)

  if (dryRun) {
    return
  }

  yield* refreshToken()
  yield* fetchWithoutRefreshingToken(actions, method, url, settings, data, actionParams)
}
