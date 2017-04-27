import { put, call, select } from 'redux-saga/effects'

import { fromAuth, fromContext } from 'store/selectors'
import api from 'services/api'
import refreshToken from '../refreshToken'

export function* fetchWithoutRefreshingToken(actions, method, url, settings = {}, data = null, actionParams = null) {
  const lang = yield select(fromContext.getLocale)
  const accessToken = yield select(fromAuth.getAccessToken)

  try {
    const response = yield call(api[method], url, { ...settings, lang, accessToken }, data)

    yield put(actions.success(response, actionParams))
  } catch (e) {
    yield put(actions.failure(e))
    throw e
  }
}

export default function* (actions, payload, method, url, settings = {}, data = null) {
  yield* refreshToken()
  yield* fetchWithoutRefreshingToken(actions, payload, method, url, settings, data)
}
