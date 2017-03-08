import { put, fork, takeLatest } from 'redux-saga/effects'

import fetch from 'sagas/fetch'
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

export function* readProjectList() {
  return yield* fetch(projectList, null, 'get', '/projects')
}

export function* readProjectDetails({ id }) {
  return yield* fetch(projectDetails, null, 'get', `/projects/${id}`)
}

export function* watchProjectSubmitRequest() {
  yield takeLatest(PROJECT_SUBMIT.REQUEST, submitProject)
}

export function* watchProjectListRequest() {
  yield takeLatest(PROJECT_LIST.REQUEST, readProjectList)
}

export function* watchProjectDetailsRequest() {
  yield takeLatest(PROJECT_DETAILS.REQUEST, readProjectDetails)
}

export default function* () {
  yield fork(watchProjectSubmitRequest)
  yield fork(watchProjectListRequest)
  yield fork(watchProjectDetailsRequest)
}
