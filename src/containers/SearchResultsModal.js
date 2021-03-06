import React from 'react'
import { connect } from 'react-redux'
import { fromSearchEngine, fromContext } from 'store/selectors'

import SearchResultsModal from 'components/SearchResultsModal'

const SearchResultsModalContainer = props => <SearchResultsModal {...props} />

const mapStateToProps = state => ({
  projectFlowResults: fromSearchEngine.getProjectFlowResults(state),
  wordpressContentResultsByType: fromSearchEngine.getWordpressContentResultsByType(state),
  query: fromSearchEngine.getQuery(state),
  locale: fromContext.getLocale(state),
})

export default connect(mapStateToProps)(SearchResultsModalContainer)
