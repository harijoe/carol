import { put, call, select } from 'redux-saga/effects'
import { takeLatest } from 'utils/effects'
import { projectFlowIndex } from 'services/algolia'
import { fromContext } from 'store/selectors'
import { SEARCH_ENGINE_SEARCH, projectElaborationSetResults } from './actions'

function* search({ query }) {
  if (query === '') {
    yield put(projectElaborationSetResults(null))

    return
  }

  const country = yield select(fromContext.getCountry)

  const response = yield call(() =>
    projectFlowIndex.search({
      query,
      page: 0,
      hitsPerPage: 4,
      filters: `countryCode:${country}`,
    }),
  )

  yield put(projectElaborationSetResults({ results: response.hits, nbHits: response.nbHits }))
}

export default function*() {
  yield [
    takeLatest(SEARCH_ENGINE_SEARCH, search),
  ]
}
