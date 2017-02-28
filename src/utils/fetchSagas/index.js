import { put, call, select } from 'redux-saga/effects'
import { fromLocale } from 'store/selectors'

import api from 'services/api'

const noop = () => {}

export default function* fetch(actions, payload, resolve = noop, reject = noop, method, url, settings = {}, data = null) {
  try {
    const lang = yield select(fromLocale.getLocale)
    const response = yield call(api[method], url, { ...settings, lang }, data)

    resolve(response)

    yield put(actions.success({ ...response, ...payload }))
  } catch (e) {
    reject(e)

    yield put(actions.failure(e))
  }
}
