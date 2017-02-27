import { call, fork, put, select } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

import { fromProjectElaboration } from 'store/selectors'
import { PROJECT_ELABORATION_REPLY, projectElaborationReply } from './actions'

function* fetchTemporary(actions, payload) {
  yield put(actions.success({ 'hydra:member': [{ message: { text: 'next question' } }], ...payload }))
}

function* replyProjectElaboration({ text, resolve, reject }) {
  const user = yield select(fromProjectElaboration.getUser)

  // todo: fetchTemporary has to be removed when api will be plugged
  yield call(fetchTemporary, projectElaborationReply, { previousResponse: text }, resolve, reject, 'post', '/project-elaboration', {}, { text, user })
}

function* watchReplyRequest() {
  yield call(takeEvery, PROJECT_ELABORATION_REPLY.REQUEST, replyProjectElaboration)
}

export default function* () {
  yield [
    fork(watchReplyRequest),
  ]
}
