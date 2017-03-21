import { put, takeLatest } from 'redux-saga/effects'

import fetch from 'sagas/fetch'
import {
  projectSubmit,
  projectList,
  projectDetails,
  PROJECT_SUBMIT,
  PROJECT_LIST,
  PROJECT_DETAILS,
} from './actions'

export function* handleSubmitProjectRequest() {
  // @TODO deserves a comment...
  const request = yield Math.floor((Math.random() * 2) + 1)

  switch (request) {
    case 1: {
      yield put(projectSubmit.failure())
      break
    }
    case 2: {
      yield put(projectSubmit.success())
      break
    }
    default: {
      yield put(projectSubmit.success())
      break
    }
  }
}

export function* handleReadProjectListRequest() {
  yield* fetch(projectList, 'get', '/projects')
}

export function* handleReadProjectDetailsRequest({ id }) {
  yield* fetch(projectDetails, 'get', `/projects/${id}`)
}

export default function* () {
  yield takeLatest(PROJECT_SUBMIT.REQUEST, handleSubmitProjectRequest)
  yield takeLatest(PROJECT_LIST.REQUEST, handleReadProjectListRequest)
  yield takeLatest(PROJECT_DETAILS.REQUEST, handleReadProjectDetailsRequest)
}
