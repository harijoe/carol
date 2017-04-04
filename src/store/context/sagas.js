import { put } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import { takeLatest } from 'utils/effects'
import { toggleFullscreenNavigation } from './actions'

export function* handleLocationChange() {
  yield put(toggleFullscreenNavigation(false))
}

export default function* () {
  yield [
    takeLatest(LOCATION_CHANGE, handleLocationChange),
  ]
}
