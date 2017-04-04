import { put, select, takeLatest } from 'redux-saga/effects'
import { fromProjectElaboration } from 'store/selectors'

import fetch from 'sagas/fetch'
import {
  PROJECT_ELABORATION_REPLY,
  PROJECT_ELABORATION_HERO_SET_RESPONSE,
  PROJECT_ELABORATION_HERO_DETAILS,
  projectElaborationReply,
  setProjectElaborationResponse,
  heroDetails,
} from './actions'

function* replyProjectElaboration({ text, payload = null }) {
  const user = yield select(fromProjectElaboration.getUser)

  if (!['new_project.reset', 'new_project.back'].includes(text)) {
    yield put(setProjectElaborationResponse(text))
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

function* replyHero() {
  const hero = yield select(fromProjectElaboration.getHero)
  const user = yield select(fromProjectElaboration.getUser)

  yield* replyProjectElaboration({ text: 'new_project.reset' })
  yield put(setProjectElaborationResponse(hero[1].response.text))
  yield* fetch(projectElaborationReply, 'post', '/chatbot', {}, {
    message: {
      text: hero[1].response.text,
      quick_reply: { payload: hero[1].response.payload },
    },
    user,
    channel: 'project',
  })
}

function* requestHero() {
  const user = yield select(fromProjectElaboration.getUser)

  yield* fetch(heroDetails, 'post', '/chatbot', {}, {
    message: {
      text: 'new_project.first_question',
    },
    user,
    channel: 'project',
  })
}

export default function* () {
  yield [
    takeLatest(PROJECT_ELABORATION_REPLY.REQUEST, replyProjectElaboration),
    takeLatest(PROJECT_ELABORATION_HERO_DETAILS.REQUEST, requestHero),
    takeLatest(PROJECT_ELABORATION_HERO_SET_RESPONSE, replyHero),
  ]
}
