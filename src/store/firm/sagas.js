import fetch from 'sagas/fetch'
import { select } from 'redux-saga/effects'
import { takeLatest } from 'utils/effects'
import { fromProject } from 'store/selectors'
import redirectToNextValidationStep from 'sagas/redirectToNextValidationStep'
import { projectDetails as projectDetailsAction } from 'store/actions'

import { firmList, firmDetails, firmReviews, FIRM_LIST, FIRM_DETAILS, FIRM_REVIEWS } from './actions'

export function* handleReadFirmListRequest({ projectId }) {
  let projectDetails = yield select(fromProject.getDetails, projectId)
  const normalizedProjectId = `/projects/${projectId}`

  // Handle the case where the project hasn't been fetched yet (projectId coming from query)
  if (projectDetails == null) {
    yield* fetch(projectDetailsAction, 'get', normalizedProjectId)
    projectDetails = yield select(fromProject.getDetails, normalizedProjectId)
  }

  if (projectDetails.status !== 'completion_in_progress') {
    redirectToNextValidationStep(projectId)
  }

  return yield* fetch(firmList, 'get', `/firms?project=${projectId}`)
}

export function* handleReadFirmDetailsRequest({ id }) {
  yield* fetch(firmDetails, 'get', id)
}

export function* handleReadFirmReviewsRequest({ id }) {
  yield* fetch(firmReviews, 'get', `${id}/reviews?pagination=false`)
}

export default function* () {
  yield [
    takeLatest(FIRM_LIST.REQUEST, handleReadFirmListRequest),
    takeLatest(FIRM_DETAILS.REQUEST, handleReadFirmDetailsRequest),
    takeLatest(FIRM_REVIEWS.REQUEST, handleReadFirmReviewsRequest),
  ]
}
