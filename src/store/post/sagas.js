import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { fromAuth } from 'store/selectors'
import { postList, POST_LIST_REQUEST } from './actions'

const fn = () => true

export function* listPosts(scope, tags, limit, resolve = fn, reject = fn) {
  try {
    const { token } = yield call(fromAuth.getToken())
    const { data } = yield call(api.get, `/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${limit}&order[project_date]=DESC`, { accessToken: token })

    resolve(data)
    yield put(postList.success(data))
  } catch (e) {
    reject(e)
    yield put(postList.failure(e))
  }
}

export function* watchPostListRequest() {
  while (true) {
    const { scope, tags, limit, resolve, reject } = yield take(POST_LIST_REQUEST)
    yield call(listPosts, scope, tags, limit, resolve, reject)
  }
}

export default function* () {
  yield fork(watchPostListRequest)
}
