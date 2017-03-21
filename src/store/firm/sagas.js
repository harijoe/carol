import { select, put, takeLatest } from 'redux-saga/effects'
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

export function* handleReadFirmDetailsRequest({ id }) {
  yield* fetch(firmDetails, 'get', `/firms/${id}`)
}

export default function* () {
  yield takeLatest(FIRM_LIST.REQUEST, handleReadFirmListRequest)
  yield takeLatest(FIRM_DETAILS.REQUEST, handleReadFirmDetailsRequest)
}
