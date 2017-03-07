import { put, call, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import fetch from 'utils/fetchSagas'
import {
  projectSubmit,
  projectList,
  projectDetails,
  PROJECT_SUBMIT,
  PROJECT_LIST,
  PROJECT_DETAILS,
} from './actions'

export function* submitProject() {
  // @Todo deserves a comment...
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
  return yield call(fetch, projectList, null, resolve, reject, 'get', '/projects')
}
// @TODO: when #191 is finished
export function* readProjectDetails({ id, resolve, reject }) {
  return yield call(fetch, projectDetails, null, resolve, reject, 'get', `/projects/${id}`)
}

export function* watchProjectSubmitRequest() {
  yield call(takeLatest, PROJECT_SUBMIT.REQUEST, submitProject)
}

export function* watchProjectListRequest() {
  yield call(takeLatest, PROJECT_LIST.REQUEST, readProjectList)
}

export function* watchProjectDetailsRequest() {
  yield call(takeLatest, PROJECT_DETAILS.REQUEST, readProjectDetails)
}

export default function* () {
  yield fork(watchProjectSubmitRequest)
  yield fork(watchProjectListRequest)
  yield fork(watchProjectDetailsRequest)
}
