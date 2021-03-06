import { put, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { fromUser, fromProject } from 'store/selectors'
import notify from 'sagas/notify'
import { putAndAwait } from 'utils/effects'
import { projectUpdate } from 'store/actions'
import pushGtmEvent from 'utils/gtm'
import { requireUser, requireProjectDetails } from '../require'
import softPush from '../softPush'
import { handleReadProjectListRequest } from '../../store/project/sagas'

export default function* redirectToNextValidationStep(projectIdFromParams = null) {
  // Retrieves necessary data
  const projectId = projectIdFromParams == null ? yield* getProjectToValidate() : projectIdFromParams

  if (projectId == null) {
    return yield put(push('/'))
  }

  yield* requireProjectDetails(projectId)
  const projectDetails = yield select(fromProject.getDetails, projectId)

  yield* requireUser()

  // Checks on which steps to go, based on redux state
  const mobilePhoneVerified = yield select(fromUser.getMobilePhoneVerified)
  const emailVerified = yield select(fromUser.getEmailVerified)

  if (projectDetails.purpose == null || projectDetails.startTimeframe == null) {
    yield* softPush(`${projectDetails['@id']}/account`)
  } else if (!mobilePhoneVerified) {
    yield* softPush(`/validation/phone?projectId=${projectDetails['@id']}`, '/validation/phone')
  } else if (!emailVerified) {
    yield* softPush(`/validation/email?projectId=${projectDetails['@id']}`, '/validation/email')
  } else {
    yield* handleProjectValidated(projectId)
  }

  return null
}

function* handleProjectValidated(id) {
  const email = yield select(fromUser.getEmail)

  yield pushGtmEvent({ event: 'EndAutoValidation', email })
  yield* putAndAwait(projectUpdate.request({ status: 'validated' }, id))
  yield* notify('user.thank_you', 'project.notify_project_validated')

  const projectDetails = yield select(fromProject.getDetails, id)

  if (projectDetails.duplicate) {
    yield* notify('', 'project.notify_project_duplicated', 'error')
  }

  yield pushGtmEvent({ event: 'ValidForm', email, id_project: projectDetails.leadReference })
  yield put(push('/project-validation'))
}

function* getProjectToValidate() {
  yield* handleReadProjectListRequest()

  const projectsToValidate = yield select(fromProject.getProjectsToValidate)

  if (projectsToValidate.length === 0) {
    return null
  }

  return projectsToValidate[0]['@id']
}
