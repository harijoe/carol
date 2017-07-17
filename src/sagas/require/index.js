import { fromUser, fromProject, fromProjectElaboration } from 'store/selectors'
import { select } from 'redux-saga/effects'
import {
  projectDetails as projectDetailsAction,
  userDetails,
  projectElaborationPartner,
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

  if (projectDetails == null) {
    yield* fetch(projectDetailsAction, 'get', projectId)
  }
}

export const requirePartner = function* (partnerCode) {
  const partnerHeaderText = yield select(fromProjectElaboration.getPartnerHeaderText)
  const partnerHeaderLink = yield select(fromProjectElaboration.getPartnerHeaderLink)

  if (partnerHeaderText == null || partnerHeaderLink == null) {
    yield* fetch(projectElaborationPartner, 'get', `/partners?acqSource=${partnerCode}`)
  }
}
