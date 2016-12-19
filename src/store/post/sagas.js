import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { getToken } from 'utils/token'
import { postList, POST_LIST_REQUEST } from './actions'

const noop = () => {}

export function* listPosts(scope, tags, limit, resolve = noop, reject = noop) {
  try {
    const token = yield call(getToken)
    const data = yield call(api.get, `/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${limit}&order[project_date]=DESC`, { accessToken: token })

    resolve(data['hydra:member'])
    yield put(postList.success({ data: data['hydra:member'], scope }))
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
