import { put, call, select } from 'redux-saga/effects'
import { takeLatest } from 'utils/effects'
import { projectFlowIndex, wordpressContentIndex } from 'services/algolia'
import { fromContext } from 'store/selectors'
import { SEARCH_ENGINE_SEARCH, projectElaborationSetResults } from './actions'

function* search({ query }) {
  if (!query) {
    yield put(projectElaborationSetResults(null))

    return
  }

  yield Promise.all([
    yield* searchInProjectFlowIndex(query),
    yield* searchInWordpressContentIndex(query),
  ])
}

function* searchInProjectFlowIndex(query) {
  const country = yield select(fromContext.getCountry)
  const response = yield call(() =>
    projectFlowIndex(country).search({
      query,
      page: 0,
      hitsPerPage: 1000, // Arbitrary, understand all the results
      filters: `countryCode:${country}`,
    }),
  )

  yield put(projectElaborationSetResults({ hits: response.hits, nbHits: response.nbHits, indexName: 'projectFlow' }))
}

function* searchInWordpressContentIndex(query) {
  const country = yield select(fromContext.getCountry)
  const response = yield call(() =>
    wordpressContentIndex(country).search({
      query,
      page: 0,
      hitsPerPage: 1000, // Arbitrary, understand all the results
    }),
  )

  yield put(projectElaborationSetResults({ hits: response.hits, nbHits: response.nbHits, indexName: 'wordpressContent' }))
}

export default function* () {
  yield [takeLatest(SEARCH_ENGINE_SEARCH, search)]
}
