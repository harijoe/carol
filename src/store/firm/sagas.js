import { fork, select, put, takeLatest } from 'redux-saga/effects'
import { fromContext } from 'store/selectors'
import fetch from 'sagas/fetch'
import { push } from 'react-router-redux'

import { firmList, firmDetails, FIRM_LIST, FIRM_DETAILS } from './actions'

export function* handleReadFirmListRequest({ params }) {
  const filters = params.length > 0 ? `&${params.join('&')}` : ''
  const country = yield select(fromContext.getCountry)

  return yield* fetch(firmList, { params }, 'get', `/firms/search?country-code=${country}${filters}`)
}

export function* handleReadFirmListSuccess({ payload }) {
  yield put(push(`/search-firm?${payload.params.join('&')}`))
}

export function* readFirmDetails({ id }) {
  return yield* fetch(firmDetails, null, 'get', `/firms/${id}`)
}

export function* watchFirmListRequest() {
  yield takeLatest(FIRM_LIST.REQUEST, handleReadFirmListRequest)
}

export function* watchFirmListSuccess() {
  yield takeLatest(FIRM_LIST.SUCCESS, handleReadFirmListSuccess)
}

export function* watchFirmDetailsRequest() {
  yield takeLatest(FIRM_DETAILS.REQUEST, readFirmDetails)
}

export default function* () {
  yield fork(watchFirmDetailsRequest)
  yield fork(watchFirmListRequest)
  yield fork(watchFirmListSuccess)
}
