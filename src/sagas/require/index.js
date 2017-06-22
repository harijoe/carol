import { fromUser, fromProject } from 'store/selectors'
import { select } from 'redux-saga/effects'
import {
  projectDetails as projectDetailsAction,
  userDetails,
} from 'store/actions'
import fetch from 'sagas/fetch'

export const requireUser = function* () {
  const userId = yield select(fromUser.getId)

  if (userId == null) {
    yield* fetch(userDetails, 'get', '/users/me')
  }
}

export const requireProjectDetails = function* (projectId) {
  const projectDetails = yield select(fromProject.getDetails, projectId)

  // Handle the case where the project hasn't been fetched yet (projectId coming from query)
  if (projectDetails == null) {
    yield* fetch(projectDetailsAction, 'get', projectId)
  }
}
