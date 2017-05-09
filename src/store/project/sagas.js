import { put } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import notify from 'sagas/notify'
import { HTTPError } from 'utils/errors'

import fetch from 'sagas/fetch'
import redirectToNextStep from 'sagas/projectAutoValidation'
import getFormErrors from 'utils/formErrors'
import { takeLatest } from 'utils/effects'
import { userUpdate } from 'store/actions'
import {
  projectSubmit,
  projectList,
  projectDetails,
  projectUpdate,
  PROJECT_SUBMIT,
  PROJECT_LIST,
  PROJECT_DETAILS,
  PROJECT_UPDATE,
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

function* handleUpdateProjectRequest({ projectData, userData, projectId, userId }) {
  try {
    yield* fetch(projectUpdate, 'put', projectId, {}, projectData, { id: projectId })
    yield* fetch(userUpdate, 'put', userId, {}, userData)
    yield notify('user.thank_you', 'user.account_updated')
    yield* redirectToNextStep(projectId)
  } catch (error) {
    if (error instanceof HTTPError) {
      yield put(stopSubmit('ProfileForm', getFormErrors(error.message)))
    }
  }
}

export function* handleReadProjectListRequest() {
  yield* fetch(projectList, 'get', '/projects')
}

export function* handleReadProjectDetailsRequest({ id }) {
  yield* fetch(projectDetails, 'get', `/projects/${id}`, {}, null, { id })
}

export default function* () {
  yield [
    takeLatest(PROJECT_SUBMIT.REQUEST, handleSubmitProjectRequest),
    takeLatest(PROJECT_LIST.REQUEST, handleReadProjectListRequest),
    takeLatest(PROJECT_DETAILS.REQUEST, handleReadProjectDetailsRequest),
    takeLatest(PROJECT_UPDATE.REQUEST, handleUpdateProjectRequest),
  ]
}
