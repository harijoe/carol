import { put, select } from 'redux-saga/effects'
import { push, replace } from 'react-router-redux'
import { fromProjectElaboration, fromAuth, fromUser, fromRouting, fromContext } from 'store/selectors'
import pushGtmEvent from 'utils/gtm'
import { takeLatest } from 'utils/effects'
import fetch from 'sagas/fetch'
import { requirePartner } from 'sagas/require'
import ssr from 'sagas/ssr'
import notify from 'sagas/notify'
import { saveProjectElaborationIdInCookies } from 'store/utils'
import generateSessionId from 'utils/generateSessionId'
import { projectUpdate, removeInitialQueryParam } from 'store/actions'

import {
  PROJECT_ELABORATION_CONVERSATION_REPLY,
  PROJECT_ELABORATION_HERO_SET_RESPONSE,
  PROJECT_ELABORATION_HERO_DETAILS,
  PROJECT_ELABORATION_CONVERSATIONS_DETAILS,
  PROJECT_ELABORATION_CONVERSATION_CURRENT,
  PROJECT_ELABORATION_PRE_VALIDATE,
  PROJECT_ELABORATION_CLICK_FIND_A_PRO,
  projectElaborationReply,
  projectElaborationConversationsDetails,
  setProjectElaborationConversationAnswer,
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

  const { utm_source, acq_activity } = yield select(fromContext.getInitialQueryParams)
  const { slug } = yield select(fromRouting.getQuery)

  // eslint-disable-next-line camelcase
  if (utm_source != null && acq_activity != null) {
    requestPayload.tracking = {
      acqSource: utm_source,
      acqActivity: acq_activity,
    }
    yield* requirePartner(requestPayload.tracking.acqSource)
  }

  if (text.indexOf('new_project.first_question') !== 0 && slug != null) {
    requestPayload.start_flow = slug
    const pathname = yield select(fromRouting.getPathname)
    const query = yield select(fromRouting.getQuery)

    delete query.slug

    yield put(removeInitialQueryParam('slug'))
    yield put(replace({ pathname, query }))
  }

  yield* fetch(projectElaborationReply, 'post', '/chatbot', {}, requestPayload)
}

function* getConversations() {
  const sessionId = yield select(fromProjectElaboration.getSessionId)

  try {
    yield* fetch(projectElaborationConversationsDetails, 'get', `/chatbot_storages/conversation/${sessionId}`)
  } catch (error) {
    if (error.status !== 404) throw error.status
  }
}

function* getConversationCurrent() {
  yield put(projectElaborationResetConversation)

  const query = yield select(fromRouting.getQuery)

  if (query.slug != null) {
    yield* replyConversation({ text: `new_project.first_question:${query.slug}` })

    return
  }

  yield* getConversations()

  const heroAnswer = yield select(fromProjectElaboration.getHeroAnswer)

  yield pushGtmEvent({ event: 'OpenForm', chatbotKey1: heroAnswer.text })

  const hasActiveConversation = yield select(fromProjectElaboration.hasActiveConversation)

  if (hasActiveConversation) {
    yield* replyConversation({ text: 'new_project.current' })
  } else {
    yield* replyConversation({ text: 'new_project.first_question' })
  }
}

function* replyHero() {
  const hero = yield select(fromProjectElaboration.getHero)

  yield* replyConversation({ text: 'new_project.reset' })

  yield* replyConversation({ text: hero[1].answer.text, payload: hero[1].answer.payload })
  yield put(push('/project-elaboration'))
}

function* requestHero() {
  const user = yield select(fromProjectElaboration.getSessionId)
  const firstChoices = yield select(fromProjectElaboration.getFirstChoices)

  if (firstChoices.length !== 0) {
    return
  }

  yield* fetch(
    projectElaborationHeroDetails,
    'post',
    '/chatbot',
    {},
    {
      message: {
        text: 'new_project.first_question',
      },
      user,
      channel: 'project',
    },
  )
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

  yield* fetch(projectElaborationPreValidate, 'post', `/project-start/${chatbotStorageId}`)

  const sessionId = generateSessionId()
  saveProjectElaborationIdInCookies(sessionId)

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
  yield put(push(`${projectId}/account`))
  yield* notify('user.thank_you', 'project.elaboration.project_prevalidation.success', 'success', {}, { name: projectName })
  yield pushGtmEvent({
    event: 'StartAutoValidation',
    email,
  })
}

function* handleClickOnFindAPro() {
  yield* replyConversation({ text: 'new_project.reset' })
  yield put(push('/project-elaboration'))
}

export default function*() {
  yield [
    takeLatest(PROJECT_ELABORATION_CONVERSATION_REPLY.REQUEST, replyConversation),
    takeLatest(PROJECT_ELABORATION_HERO_DETAILS.REQUEST, getConversations),
    takeLatest(PROJECT_ELABORATION_HERO_DETAILS.REQUEST, ssr(requestHero)),
    takeLatest(PROJECT_ELABORATION_HERO_SET_RESPONSE, replyHero),
    takeLatest(PROJECT_ELABORATION_CLICK_FIND_A_PRO, handleClickOnFindAPro),
    takeLatest(PROJECT_ELABORATION_CONVERSATIONS_DETAILS.REQUEST, getConversations),
    takeLatest(PROJECT_ELABORATION_CONVERSATION_CURRENT.REQUEST, getConversationCurrent),
    takeLatest(PROJECT_ELABORATION_PRE_VALIDATE.REQUEST, preValidate),
  ]
}
