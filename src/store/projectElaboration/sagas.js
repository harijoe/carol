import { put, select } from 'redux-saga/effects'
import cookie from 'react-cookie'
import { push } from 'react-router-redux'
import uuid from 'uuid/v4'
import { fromProjectElaboration, fromAuth, fromUser, fromRouting, fromContext } from 'store/selectors'
import pushGtmEvent from 'utils/gtm'
import { takeLatest } from 'utils/effects'
import fetch from 'sagas/fetch'
import ssr from 'sagas/ssr'
import notify from 'sagas/notify'
import { projectUpdate } from 'store/actions'

import {
  PROJECT_ELABORATION_CONVERSATION_REPLY,
  PROJECT_ELABORATION_HERO_SET_RESPONSE,
  PROJECT_ELABORATION_HERO_DETAILS,
  PROJECT_ELABORATION_CONVERSATIONS_DETAILS,
  PROJECT_ELABORATION_CONVERSATIONS_SELECT,
  PROJECT_ELABORATION_RESET,
  PROJECT_ELABORATION_CONVERSATION_CURRENT,
  PROJECT_ELABORATION_PRE_VALIDATE,
  projectElaborationReply,
  projectElaborationConversationsDetails,
  setProjectElaborationConversationAnswer,
  projectElaborationConversationDetails,
  setProjectElaborationSessionId,
  projectElaborationHeroDetails,
  projectElaborationResetConversation,
  projectElaborationPreValidate,
} from './actions'

function* replyConversation({ text, payload = null }) {
  const user = yield select(fromProjectElaboration.getSessionId)
  const requestPayload = {
    message: {
      text,
    },
    user,
    channel: 'project',
  }

  if (payload != null) {
    requestPayload.message.quick_reply = { payload }
  }

  const reservedAnswers = ['new_project.reset', 'new_project.back', 'new_project.current']

  if (!reservedAnswers.includes(text)) {
    yield put(setProjectElaborationConversationAnswer(text))
  }

  // @TODO must be conditioned by 'new_project.reset', but this has to wait an API evolution
  const { utm_source, acq_activity } = yield select(fromContext.getInitialQueryParams)

  // eslint-disable-next-line camelcase
  if (utm_source != null && acq_activity != null) {
    requestPayload.tracking = {
      acqSource: utm_source,
      acqActivity: acq_activity,
    }
  }

  yield* fetch(projectElaborationReply, 'post', '/chatbot', {}, requestPayload)
}

function* getConversations() {
  const sessionId = yield select(fromProjectElaboration.getSessionId)

  yield* fetch(projectElaborationConversationsDetails, 'get', `/chatbot-conversations/${sessionId}`)
}

function* getConversationCurrent() {
  yield put(projectElaborationResetConversation)
  yield* getConversations()

  const heroAnswer = yield select(fromProjectElaboration.getHeroAnswer)

  yield pushGtmEvent({ event: 'OpenForm', chatbotKey1: heroAnswer.text })

  if ((yield select(fromProjectElaboration.hasActiveConversation))) {
    yield* replyConversation({ text: 'new_project.current' })
  } else if (!(yield select(fromProjectElaboration.hasConversations))) {
    yield* replyConversation({ text: 'new_project.reset' })
  }
}

function* selectConversation({ authType }) {
  yield put(projectElaborationConversationDetails(authType))

  const sessionId = yield select(fromProjectElaboration.getSessionId)

  cookie.save('project_elaboration_session_id', sessionId)
  yield* replyConversation({ text: 'new_project.current' })
}

function* replyHero() {
  const hero = yield select(fromProjectElaboration.getHero)

  yield* replyConversation({ text: 'new_project.reset' })
  yield put(setProjectElaborationConversationAnswer(hero[1].answer.text))
  yield* replyConversation({ text: hero[1].answer.text, payload: hero[1].answer.payload })
  yield put(push('/project-elaboration'))
}

function* requestHero() {
  const user = yield select(fromProjectElaboration.getSessionId)
  const firstChoices = yield select(fromProjectElaboration.getFirstChoices)

  if (firstChoices.length !== 0) {
    return
  }

  yield* fetch(projectElaborationHeroDetails, 'post', '/chatbot', {}, {
    message: {
      text: 'new_project.first_question',
    },
    user,
    channel: 'project',
  })
}

function* resetAll() {
  const sessionId = uuid()

  yield cookie.save('project_elaboration_session_id', sessionId, { path: '/', maxAge: 86400, secure: true })
  yield put(setProjectElaborationSessionId(sessionId))
}

function* preValidate({ chatbotStorageId }) {
  const authenticated = yield select(fromAuth.isAuthenticated)
  const state = yield select(fromRouting.getState)
  const redirectPathname = yield select(fromRouting.getPathname)
  const heroAnswer = yield select(fromProjectElaboration.getHeroAnswer)

  if (!authenticated) {
    yield put(push({ pathname: '/signup', state: { ...state, redirectPathname } }))

    return
  }

  yield* fetch(projectElaborationPreValidate, 'post', `/project-prevalidate/${chatbotStorageId}`)


  const projectId = yield select(fromProjectElaboration.getProjectId)
  const { sqn } = yield select(fromContext.getInitialQueryParams)

  if (sqn != null) {
    yield* fetch(projectUpdate, 'put', projectId, {}, { sqn: parseInt(sqn, 10) })
  }

  const projectName = yield select(fromProjectElaboration.getProjectName)
  const proFormLabel = yield select(fromProjectElaboration.getProFormLabel)
  const postalCode = yield select(fromProjectElaboration.getPostalCode)
  const email = yield select(fromUser.getEmail)

  yield pushGtmEvent({
    event: 'ProjectCreated',
    postalCode,
    chatbotKey1: heroAnswer.text,
    proFormLabel,
  })
  yield put(push(`/projects/${projectId}/account`))
  yield* notify('user.thank_you', 'project.elaboration.project_prevalidation.success', 'success', {}, { name: projectName })
  yield pushGtmEvent({
    event: 'StartAutoValidation',
    email,
  })
}

export default function* () {
  yield [
    takeLatest(PROJECT_ELABORATION_CONVERSATION_REPLY.REQUEST, replyConversation),
    takeLatest(PROJECT_ELABORATION_HERO_DETAILS.REQUEST, getConversations),
    takeLatest(PROJECT_ELABORATION_HERO_DETAILS.REQUEST, ssr(requestHero)),
    takeLatest(PROJECT_ELABORATION_HERO_SET_RESPONSE, replyHero),
    takeLatest(PROJECT_ELABORATION_CONVERSATIONS_DETAILS.REQUEST, getConversations),
    takeLatest(PROJECT_ELABORATION_CONVERSATIONS_SELECT.REQUEST, selectConversation),
    takeLatest(PROJECT_ELABORATION_RESET, resetAll),
    takeLatest(PROJECT_ELABORATION_CONVERSATION_CURRENT.REQUEST, getConversationCurrent),
    takeLatest(PROJECT_ELABORATION_PRE_VALIDATE.REQUEST, preValidate),
  ]
}
