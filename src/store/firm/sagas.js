import { call, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import api from 'services/api'
import fetch from 'utils/fetchSagas'
import { getCurrentCountry } from 'utils/locale'
import { firmList, firmDetails, FIRM_LIST, FIRM_DETAILS } from './actions'

export function* readFirmList({ params, resolve, reject }) {
  const filters = params.length > 0 ? `&${params.join('&')}` : ''

  return yield call(fetch, firmList, null, resolve, reject, api.get, `/firms/search?country-code=${getCurrentCountry()}${filters}`)
}

export function* readFirmDetails({ id, resolve, reject }) {
  return yield call(fetch, firmDetails, null, resolve, reject, api.get, `/firms/${id}`)
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
