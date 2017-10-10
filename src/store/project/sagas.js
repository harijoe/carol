import { select, put } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import { HTTPError } from 'utils/errors'
import { fromUser, fromRouting } from 'store/selectors'

import fetch from 'sagas/fetch'
import redirectToNextValidationStep from 'sagas/redirectToNextValidationStep'
import getFormErrors from 'utils/formErrors'
import { takeLatest, putAndAwait } from 'utils/effects'
import { userUpdate } from 'store/actions'
import fetchGooglePlaceCoords from 'services/google/fetchGooglePlaceCoords'
import {
  projectList,
  projectDetails,
  projectUpdate,
  projectValidate,
  googlePlaceCoordsResults,
  PROJECT_LIST,
  PROJECT_DETAILS,
  PROJECT_VALIDATE,
  PROJECT_UPDATE,
  PROJECT_CHECK_VALIDATION_FLOW,
} from './actions'

function* handleProjectValidateRequest({ projectData, userData, projectId }) {
  try {
    const userId = yield select(fromUser.getId)

    yield* putAndAwait(userUpdate.request(userData, userId))
    yield* putAndAwait(projectUpdate.request(projectData, `/projects/${projectId}`))
    yield* redirectToNextValidationStep(`/projects/${projectId}`)

    yield put(projectValidate.success())
  } catch (e) {
    yield put(projectValidate.failure(e))
  }
}

function* handleProjectUpdateRequest({ data, id }) {
  try {
    yield* fetch(projectUpdate, 'put', id, {}, data)
  } catch (error) {
    if (error instanceof HTTPError) {
      yield put(stopSubmit('ProjectAccountForm', getFormErrors(error.message)))
    }
  }
}

export function* handleReadProjectListRequest() {
  yield* fetch(projectList, 'get', '/projects?order[createdAt]=DESC')
}

export function* handleReadProjectDetailsRequest({ id }) {
  yield* fetch(projectDetails, 'get', `/projects/${id}`)
}

function* handleUpdateProjectSuccess({ payload: { postalCode: { city, postalCode } } }) {
  const location = yield fetchGooglePlaceCoords(city, postalCode)

  yield put(googlePlaceCoordsResults(location))
}

function* handleCheckValidationFlow({ projectId }) {
  const query = yield select(fromRouting.getQuery)

  yield* redirectToNextValidationStep(projectId || query.projectId)
}

export default function*() {
  yield [
    takeLatest(PROJECT_LIST.REQUEST, handleReadProjectListRequest),
    takeLatest(PROJECT_DETAILS.REQUEST, handleReadProjectDetailsRequest),
    takeLatest(PROJECT_DETAILS.SUCCESS, handleUpdateProjectSuccess),
    takeLatest(PROJECT_VALIDATE.REQUEST, handleProjectValidateRequest),
    takeLatest(PROJECT_UPDATE.REQUEST, handleProjectUpdateRequest),
    takeLatest(PROJECT_CHECK_VALIDATION_FLOW, handleCheckValidationFlow),
  ]
}
