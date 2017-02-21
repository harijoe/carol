import { put, call } from 'redux-saga/effects'

import api from 'services/api'

const noop = () => {}

export default function* fetch(actions, payload, resolve = noop, reject = noop, method, ...args) {
  try {
    const response = yield call(api[method], ...args)

    resolve(response)

    yield put(actions.success({ ...response, ...payload }))
  } catch (e) {
    reject(e)

    yield put(actions.failure(e))
  }
}
