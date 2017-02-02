import { put, call } from 'redux-saga/effects'

const noop = () => {}

export default function* fetch(actions, payload, resolve = noop, reject = noop, request, ...args) {
  try {
    const response = yield call(request, ...args)

    resolve(response)

    yield put(actions.success({ ...response, ...payload }))
  } catch (e) {
    reject(e)

    yield put(actions.failure(e))
  }
}
