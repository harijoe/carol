import React from 'react'
import { connect } from 'react-redux'
import { fromSearchEngine } from 'store/selectors'

import { SearchResultsModal } from 'components'

const SearchResultsModalContainer = props => <SearchResultsModal {...props} />

const mapStateToProps = state => ({
  results: fromSearchEngine.getResults(state),
  query: fromSearchEngine.getQuery(state),
  nbHits: fromSearchEngine.getNbHits(state),
})

export default connect(mapStateToProps)(SearchResultsModalContainer)
