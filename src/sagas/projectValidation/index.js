import { put, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { fromUser, fromProject, fromRouting } from 'store/selectors'
import fetch from 'sagas/fetch'
import notify from 'sagas/notify'
import {
  projectValidate,
  projectDetails as projectDetailsAction,
  projectList,
  userDetails,
} from 'store/actions'
import pushGtmEvent from 'utils/gtm'

function* handleProjectValidated(id) {
  const email = yield select(fromUser.getEmail)

  yield pushGtmEvent({ event: 'EndAutoValidation', email })

  yield* fetch(projectValidate, 'put', id, {}, { status: 'validated' })
  yield* notify('user.thank_you', 'project.notify_project_validated')

  // @TODO: dynamize lead_reference once we will receive it
  yield pushGtmEvent({ event: 'ValidForm', email, id_project: 'lead_reference' })

  yield put(push('/project-validation'))
}

export default function* redirectToNextStep(projectIdFromParams = null) {
  let projectId = projectIdFromParams

  // Either redirect on the homepage or find a project to validate
  if (projectId == null) {
    yield* fetch(projectList, 'get', '/projects')
    const projectsToValidate = yield select(fromProject.getProjectsToValidate)

    if (projectsToValidate.length === 0) {
      return yield put(push('/'))
    }

    // We suppose the first project is the one to be validated
    projectId = projectsToValidate[0]['@id']
  }

  let projectDetails = yield select(fromProject.getDetails, projectId)

  // Handle the case where the project hasn't been fetched yet (projectId coming from query)
  if (projectDetails == null) {
    yield* fetch(projectDetailsAction, 'get', projectId)
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
  const route = yield select(fromRouting.getPathname)

  if (projectDetails.purpose == null || projectDetails.startTimeframe == null) {
    if (route.indexOf(`${projectDetails['@id']}/account`) === 0) {
      return null
    }

    yield put(push(`${projectDetails['@id']}/account`))
  } else if (!mobilePhoneVerified) {
    // Don't redirect if already on good page
    if (route.indexOf('/validation/phone') === 0) {
      return null
    }

    yield put(push(`/validation/phone?projectId=${projectDetails['@id']}`))
  } else if (!emailVerified) {
    // Don't redirect if already on good page
    if (route.indexOf('/validation/email') === 0) {
      return null
    }

    yield put(push(`/validation/email?projectId=${projectDetails['@id']}`))
  } else {
    yield* handleProjectValidated(projectId)
  }

  return null
}
