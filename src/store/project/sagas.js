import { call, put, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { submitProject, PROJECT_SUBMIT_REQUEST } from './actions'

export function* submitProjectDetails() {
  const request = yield Math.floor((Math.random() * 2) + 1)

  switch (request) {
    case 1: {
      return yield put(submitProject.failure())
    }
    case 2: {
      return yield put(submitProject.success())
    }
    default: {
      return yield put(submitProject.success())
    }
  }
}

export function* watchProjectSubmitRequest() {
  yield call(takeLatest, PROJECT_SUBMIT_REQUEST, submitProjectDetails)
}

export default function* () {
  yield fork(watchProjectSubmitRequest)
}
