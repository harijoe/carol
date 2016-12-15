import { take, put, call, fork } from 'redux-saga/effects'
import { getPostsByTags } from 'utils/api'
import { getToken } from 'utils/token'
import { postList, POST_LIST_REQUEST } from './actions'

const fn = () => true

export function* listPosts (scope, tags, limit, resolve = fn, reject = fn) {
  try {
    const params = {
      _scope: scope,
      _tags: tags,
      _limit: limit,
    }
    const { token } = yield call(getToken())
    const { data } = yield call(getPostsByTags(token), { params })
    resolve(data)
    yield put(postList.success(data))
  } catch (e) {
    reject(e)
    yield put(postList.failure(e))
  }
}

export function* watchPostListRequest () {
  while (true) {
    const { scope, tags, limit, resolve, reject } = yield take(POST_LIST_REQUEST)
    yield call(listPosts, scope, tags, limit, resolve, reject)
  }
}

export default function* () {
  yield fork(watchPostListRequest)
}
