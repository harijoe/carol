import { put, call, fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import api from 'services/api'
import { getToken } from 'utils/token'
import { postList, POST_LIST_REQUEST } from './actions'

export function* listPosts({ scope, tags, limit }) {
  try {
    const token = yield call(getToken)
    const data = yield call(api.get, `/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${limit}&order[project_date]=DESC`, { accessToken: token })

    yield put(postList.success(data['hydra:member'], scope))
  } catch (e) {
    yield put(postList.failure(e))
  }
}

export function* watchPostListRequest() {
  yield call(takeEvery, POST_LIST_REQUEST, listPosts)
}

export default function* () {
  yield fork(watchPostListRequest)
}
