import { put, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { fromUser, fromProject } from 'store/selectors'
import fetch from 'sagas/fetch'
import { projectDetails as projectDetailsAction, projectList, userDetails } from 'store/actions'

export default function* redirectToNextStep(projectIdFromParams = null) {
  let projectId = projectIdFromParams

  // Either redirect on the homepage or find a project to validate
  if (projectId == null) {
    yield* fetch(projectList, 'get', '/projects')
    const projectsToValidate = yield select(fromProject.getProjectsToValidate)

    if (projectsToValidate.length === 0) {
      return yield put(push(''))
    }

    // We suppose the first project is the one to be validated
    projectId = projectsToValidate[0]['@id']
  }

  let projectDetails = yield select(fromProject.getDetails, projectId)

  // Handle the case where the project hasn't been fetched yet (projectId coming from query)
  if (projectDetails == null) {
    yield* fetch(projectDetailsAction, 'get', `${projectId}`, {}, null, { id: projectId })
    projectDetails = yield select(fromProject.getDetails, projectId)
  }

  // Update user here
  const userId = yield select(fromUser.getId)

  if (userId == null) {
    yield* fetch(userDetails, 'get', '/users/me')
  }

  // Checks on which steps to go, based on redux state
  const mobilePhoneVerified = yield select(fromUser.getMobilePhoneVerified)
  const emailVerified = yield select(fromUser.getEmailVerified)

  if (projectDetails.purpose == null || projectDetails.startTimeframe == null) {
    yield put(push(`projects/${projectDetails['@id']}/account`))
  } else if (!mobilePhoneVerified) {
    yield put(push(`validation/phone?projectId=${projectDetails['@id']}`))
  } else if (!emailVerified) {
    yield put(push(`validation/email?projectId=${projectDetails['@id']}`))
  } else {
    // @TODO: send project here to backend
    // @TODO: refresh user and project here ?
    // yield* fetch
    // yield* notify('user.thank_you', 'user.confirmation')
    yield put(push('project-validation'))
  }

  return null
}
