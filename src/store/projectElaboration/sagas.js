import { call, fork, put, select, takeEvery } from 'redux-saga/effects'

import { fromProjectElaboration } from 'store/selectors'
import { PROJECT_ELABORATION_REPLY, projectElaborationReply } from './actions'

function* fetchTemporary(actions, payload) {
  yield put(actions.success({ 'hydra:member': [{ message: { text: 'next question' } }], ...payload }))
}

function* replyProjectElaboration({ text }) {
  const user = yield select(fromProjectElaboration.getUser)

  // todo: fetchTemporary has to be removed when api will be plugged
  yield call(fetchTemporary, projectElaborationReply, { previousResponse: text }, 'post', '/project-elaboration', {}, { text, user })
}

function* watchReplyRequest() {
  yield takeEvery(PROJECT_ELABORATION_REPLY.REQUEST, replyProjectElaboration)
}

export default function* () {
  yield [
    fork(watchReplyRequest),
  ]
}
