import { take, put, call, fork } from 'redux-saga/effects'

import api from 'services/api'
import { getToken } from 'utils/token'
import { getCurrentCountry } from 'utils/locale'
import { firmList, firmDetails, FIRM_LIST_REQUEST, FIRM_DETAILS_REQUEST } from './actions'

export function* readFirmList(params) {
  try {
    const token = yield call(getToken)
    const data = yield call(api.get, `/firms/search?country-code=${getCurrentCountry()}&${params.join('&')}`, { accessToken: token })

    yield put(firmList.success(data['hydra:member']))
  } catch (e) {
    yield put(firmList.failure(e))
  }
}

export function* readFirmDetails(id) {
  try {
    const token = yield call(getToken)
    const data = yield call(api.get, `/firms/${id}`, { accessToken: token })

    yield put(firmDetails.success(data))
  } catch (e) {
    yield put(firmDetails.failure(e))
  }
}

export function* watchFirmListRequest() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { params } = yield take(FIRM_LIST_REQUEST)
    yield call(readFirmList, params)
  }
}

export function* watchFirmDetailsRequest() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { id } = yield take(FIRM_DETAILS_REQUEST)
    yield call(readFirmDetails, id)
  }
}

export default function* () {
  yield fork(watchFirmDetailsRequest)
  yield fork(watchFirmListRequest)
}
