import { put, fork, select, takeEvery } from 'redux-saga/effects'

import { fromProjectElaboration } from 'store/selectors'
import fetch from 'sagas/fetch'
import { PROJECT_ELABORATION_REPLY, projectElaborationReply, setProjectElaborationResponse } from './actions'

function* replyProjectElaboration({ text, payload = null }) {
  const user = yield select(fromProjectElaboration.getUser)
  const response = {
    message: {
      text,
      quick_reply: { payload },
    },
    user,
    channel: 'project',
  }

  if (!['new_project.reset', 'new_project.back'].includes(text)) {
    yield put(setProjectElaborationResponse(text))
  }

  yield* fetch(projectElaborationReply, null, 'post', '/chatbot', {}, response)
}

function* watchReplyRequest() {
  yield takeEvery(PROJECT_ELABORATION_REPLY.REQUEST, replyProjectElaboration)
}

export default function* () {
  yield [
    fork(watchReplyRequest),
  ]
}
