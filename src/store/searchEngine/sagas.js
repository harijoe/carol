import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'utils/effects'
import { projectFlowIndex } from 'services/algolia'
import {
  SEARCH_ENGINE_SEARCH,
  projectElaborationSetResults,
} from './actions'

function* search({ query }) {
  if (query === '') {
    yield put(projectElaborationSetResults(null))

    return
  }

  const response = yield call(() => projectFlowIndex.search({
    query,
    page: 0,
    hitsPerPage: 5,
  }))

  yield put(projectElaborationSetResults(response.hits))
}

export default function* () {
  yield [
    takeLatest(SEARCH_ENGINE_SEARCH, search),
  ]
}
