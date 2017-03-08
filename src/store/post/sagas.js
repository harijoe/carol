import { fork, takeEvery } from 'redux-saga/effects'

import fetch from 'sagas/fetch'
import { postList, POST_LIST } from './actions'

export function* listPosts({ scope, tags, limit }) {
  return yield* fetch(postList, { scope }, 'get', `/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${limit}&order[project_date]=DESC`)
}

export function* watchPostListRequest() {
  yield takeEvery(POST_LIST.REQUEST, listPosts)
}

export default function* () {
  yield fork(watchPostListRequest)
}
