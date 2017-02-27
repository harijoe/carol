import { call, fork, select } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { fromLocale } from 'store/selectors'
import fetch from 'utils/fetchSagas'
import { firmList, firmDetails, FIRM_LIST, FIRM_DETAILS } from './actions'

export function* readFirmList({ params, resolve, reject }) {
  const filters = params.length > 0 ? `&${params.join('&')}` : ''
  const country = yield select(fromLocale.getCountry)

  return yield call(fetch, firmList, null, resolve, reject, 'get', `/firms/search?country-code=${country}${filters}`)
}

export function* readFirmDetails({ id, resolve, reject }) {
  return yield call(fetch, firmDetails, null, resolve, reject, 'get', `/firms/${id}`)
}

export function* watchFirmListRequest() {
  yield call(takeLatest, FIRM_LIST.REQUEST, readFirmList)
}

export function* watchFirmDetailsRequest() {
  yield call(takeLatest, FIRM_DETAILS.REQUEST, readFirmDetails)
}

export default function* () {
  yield fork(watchFirmDetailsRequest)
  yield fork(watchFirmListRequest)
}
