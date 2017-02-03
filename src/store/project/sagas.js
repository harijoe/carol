import { take, put, call, fork } from 'redux-saga/effects'

import api from 'services/api'
import { getToken } from 'utils/token'
import { projectSubmit, projectList, PROJECT_SUBMIT_REQUEST, PROJECT_LIST_REQUEST } from './actions'

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

export function* readProjectList() {
  try {
    const token = yield call(getToken)
    const data = yield call(api.get, '/projects', { accessToken: token })

    yield put(projectList.success(data['hydra:member']))
  } catch (e) {
    yield put(projectList.failure(e))
  }
}

export function* watchProjectSubmitRequest() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(PROJECT_SUBMIT_REQUEST)
    yield call(submitProject)
  }
}

export function* watchProjectListRequest() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    yield take(PROJECT_LIST_REQUEST)
    yield call(readProjectList)
  }
}

export default function* () {
  yield fork(watchProjectSubmitRequest)
  yield fork(watchProjectListRequest)
}
