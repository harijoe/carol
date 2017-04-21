import { put, select } from 'redux-saga/effects'
import cookie from 'react-cookie'
import { push } from 'react-router-redux'
import uuid from 'uuid/v4'
import { fromProjectElaboration } from 'store/selectors'
import { takeLatest } from 'utils/effects'
import fetch from 'sagas/fetch'
import ssr from 'sagas/ssr'

import {
  PROJECT_ELABORATION_CONVERSATION_REPLY,
  PROJECT_ELABORATION_HERO_SET_RESPONSE,
  PROJECT_ELABORATION_HERO_DETAILS,
  PROJECT_ELABORATION_CONVERSATIONS_DETAILS,
  PROJECT_ELABORATION_CONVERSATIONS_SELECT,
  PROJECT_ELABORATION_RESET,
  PROJECT_ELABORATION_CONVERSATION_CURRENT,
  PROJECT_ELABORATION_GO_TO_PRE_VALIDATE_PAGE,
  PROJECT_ELABORATION_PRE_VALIDATE,
  projectElaborationReply,
  projectElaborationConversationsDetails,
  setProjectElaborationConversationResponse,
  projectElaborationConversationDetails,
  setProjectElaborationSessionId,
  projectElaborationHeroDetails,
  projectElaborationResetConversation,
  projectElaborationSetPreValidationUrl,
  projectElaborationPreValidate,
} from './actions'

function* replyConversation({ text, payload = null }) {
  const user = yield select(fromProjectElaboration.getSessionId)

  if (!['new_project.reset', 'new_project.back', 'new_project.current'].includes(text)) {
    yield put(setProjectElaborationConversationResponse(text))
  }

  yield* fetch(projectElaborationReply, 'post', '/chatbot', {}, {
    message: {
      text,
      quick_reply: { payload },
    },
    user,
    channel: 'project',
  })
}

function* getConversations() {
  const sessionId = yield select(fromProjectElaboration.getSessionId)

  yield* fetch(projectElaborationConversationsDetails, 'get', `/chatbot-conversations?sessionId=${sessionId}`)
}

function* getConversationCurrent() {
  yield put(projectElaborationResetConversation)
  yield* getConversations()

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
  const user = yield select(fromProjectElaboration.getSessionId)

  yield* replyConversation({ text: 'new_project.reset' })
  yield put(setProjectElaborationConversationResponse(hero[1].response.text))
  yield* fetch(projectElaborationReply, 'post', '/chatbot', {}, {
    message: {
      text: hero[1].response.text,
      quick_reply: { payload: hero[1].response.payload },
    },
    user,
    channel: 'project',
  })
  yield put(push('/project-elaboration'))
}

function* requestHero() {
  const user = yield select(fromProjectElaboration.getSessionId)

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

function* goToPreValidatePage({ payload }) {
  yield put(projectElaborationSetPreValidationUrl(payload))
  yield put(push('project-prevalidate'))
}

function* preValidate() {
  const url = yield select(fromProjectElaboration.getPreValidationUrl)

  yield* fetch(projectElaborationPreValidate, 'post', url)

  // Todo: retrieve postalCode.id and proForm.id to search firm
  yield put(push('search-firm'))
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
    takeLatest(PROJECT_ELABORATION_GO_TO_PRE_VALIDATE_PAGE, goToPreValidatePage),
    takeLatest(PROJECT_ELABORATION_PRE_VALIDATE.REQUEST, preValidate),
  ]
}
