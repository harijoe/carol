import { call, fork, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

import api from 'services/api'
import { PROJECT_ELABORATION_REPLY, projectElaborationReply } from './actions'

function* fetchTmp(actions, payload) {
  yield put(actions.success({ 'hydra:member': [{ message: { text: 'next question' } }], ...payload }))
}

function* replyProjectElaboration({ text, resolve, reject }) {
  yield call(fetchTmp, projectElaborationReply, { previousResponse: text }, resolve, reject, api.post, '/project-elaboration', text)
}

function* watchReplyRequest() {
  yield call(takeEvery, PROJECT_ELABORATION_REPLY.REQUEST, replyProjectElaboration)
}

export default function* () {
  yield [
    fork(watchReplyRequest),
  ]
}
