import { takeEvery } from 'utils/effects'
import ssr from 'sagas/ssr'

import fetch from 'sagas/fetch'
import { postList, POST_LIST } from './actions'

function* handlePostListRequest({ scope, tags, limit }) {
  yield* fetch(postList, 'get', `/posts?tag[]=${tags.join('&tag[]=')}&itemsPerPage=${limit}&order[project_date]=DESC`, {}, null, { scope })
}

export default function*() {
  yield [takeEvery(POST_LIST.REQUEST, ssr(handlePostListRequest))]
}
