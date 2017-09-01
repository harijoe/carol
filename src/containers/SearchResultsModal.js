import React from 'react'
import { connect } from 'react-redux'
import { fromContext, fromSearchEngine } from 'store/selectors'

import { SearchResultsModal } from 'components'

const SearchResultsModalContainer = props => <SearchResultsModal {...props} />

const mapStateToProps = state => ({
  results: fromSearchEngine.getResults(state),
  query: fromSearchEngine.getQuery(state),
  nbHits: fromSearchEngine.getNbHits(state),
  featureSearchSuggestionsEnabled: fromContext.isFeatureEnabled(state, 'search_suggestions'),
})

export default connect(mapStateToProps)(SearchResultsModalContainer)
