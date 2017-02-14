import { call, fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

import api from 'services/api'
import fetch from 'utils/fetchSagas'
import { postList, POST_LIST } from './actions'

export function* listPosts({ scope, tags, limit, resolve, reject }) {
  return yield call(fetch, postList, { scope }, resolve, reject, api.get, `/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${limit}&order[project_date]=DESC`)
}

export function* watchPostListRequest() {
  yield call(takeEvery, POST_LIST.REQUEST, listPosts)
}

export default function* () {
  yield fork(watchPostListRequest)
}
