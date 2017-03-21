import { put, call, select } from 'redux-saga/effects'

import { fromAuth, fromContext } from 'store/selectors'
import api from 'services/api'
import refreshToken from '../refreshToken'

export function* rawFetch(actions, payload, method, url, settings = {}, data = null) {
  const lang = yield select(fromContext.getLocale)
  const accessToken = yield select(fromAuth.getToken)

  try {
    const response = yield call(api[method], url, { ...settings, lang, accessToken }, data)

    yield put(actions.success({ ...response, ...payload }))
  } catch (e) {
    yield put(actions.failure(e))
  }
}

export default function* (actions, payload, method, url, settings = {}, data = null) {
  yield* refreshToken()
  yield* rawFetch(actions, payload, method, url, settings, data)
}
