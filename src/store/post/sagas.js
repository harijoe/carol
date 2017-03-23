import { takeEvery } from 'redux-saga/effects'

import fetch from 'sagas/fetch'
import { postList, POST_LIST } from './actions'

function* handlePostListRequest({ scope, tags, limit }) {
  try {
    yield* fetch(postList, 'get', `/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${limit}&order[project_date]=DESC`, {}, null, { scope })
  } catch (e) {
    // An error 500 can be thrown and break the application
    // @Todo
  }
}

export default function* () {
  yield takeEvery(POST_LIST.REQUEST, handlePostListRequest)
}
