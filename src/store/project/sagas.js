import { put, call, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import api from 'services/api'
import fetch from 'utils/fetchSagas'
import {
  projectSubmit,
  projectList,
  PROJECT_SUBMIT,
  PROJECT_LIST,
} from './actions'

export function* submitProject() {
  const request = yield Math.floor((Math.random() * 2) + 1)

  switch (request) {
    case 1: {
      return yield put(projectSubmit.failure())
    }
    case 2: {
      return yield put(projectSubmit.success())
    }
    default: {
      return yield put(projectSubmit.success())
    }
  }
}

export function* readProjectList({ resolve, reject }) {
  return yield call(fetch, projectList, null, resolve, reject, api.get, '/projects')
}

export function* watchProjectSubmitRequest() {
  yield call(takeLatest, PROJECT_SUBMIT.REQUEST, submitProject)
}

export function* watchProjectListRequest() {
  yield call(takeLatest, PROJECT_LIST.REQUEST, readProjectList)
}

export default function* () {
  yield fork(watchProjectSubmitRequest)
  yield fork(watchProjectListRequest)
}
