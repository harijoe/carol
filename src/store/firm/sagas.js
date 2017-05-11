import fetch from 'sagas/fetch'
import { takeLatest } from 'utils/effects'

import { firmList, firmDetails, FIRM_LIST, FIRM_DETAILS } from './actions'

export function* handleReadFirmListRequest({ projectId }) {
  return yield* fetch(firmList, 'get', `/firms?project=${projectId}`)
}

export function* handleReadFirmDetailsRequest({ id }) {
  yield* fetch(firmDetails, 'get', `/firms/${id}`)
}

export default function* () {
  yield [
    takeLatest(FIRM_LIST.REQUEST, handleReadFirmListRequest),
    takeLatest(FIRM_DETAILS.REQUEST, handleReadFirmDetailsRequest),
  ]
}
