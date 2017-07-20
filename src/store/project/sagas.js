import { select, put } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import notify from 'sagas/notify'
import { HTTPError } from 'utils/errors'
import { fromUser, fromRouting } from 'store/selectors'

import fetch from 'sagas/fetch'
import redirectToNextValidationStep from 'sagas/redirectToNextValidationStep'
import getFormErrors from 'utils/formErrors'
import { takeLatest } from 'utils/effects'
import { userUpdate } from 'store/actions'
import fetchGooglePlaceCoords from 'services/google/fetchGooglePlaceCoords'
import {
  projectList,
  projectDetails,
  projectUpdate,
  googlePlaceCoordsResults,
  PROJECT_LIST,
  PROJECT_DETAILS,
  PROJECT_UPDATE,
  PROJECT_CHECK_VALIDATION_FLOW,
} from './actions'

function* handleUpdateProjectRequest({ projectData, userData, projectId }) {
  const userId = yield select(fromUser.getId)

  try {
    yield* fetch(userUpdate, 'put', userId, {}, userData)
    yield* fetch(projectUpdate, 'put', `/projects/${projectId}`, {}, projectData)
    yield* redirectToNextValidationStep(`/projects/${projectId}`)
    yield notify('user.thank_you', 'user.account_updated')
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

function* handleCheckValidationFlow() {
  const query = yield select(fromRouting.getQuery)

  yield* redirectToNextValidationStep(query.projectId)
}

export default function* () {
  yield [
    takeLatest(PROJECT_LIST.REQUEST, handleReadProjectListRequest),
    takeLatest(PROJECT_DETAILS.REQUEST, handleReadProjectDetailsRequest),
    takeLatest(PROJECT_DETAILS.SUCCESS, handleUpdateProjectSuccess),
    takeLatest(PROJECT_UPDATE.REQUEST, handleUpdateProjectRequest),
    takeLatest(PROJECT_CHECK_VALIDATION_FLOW, handleCheckValidationFlow),
  ]
}
