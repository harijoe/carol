import React from 'react'
import { connect } from 'react-redux'
import { fromSearchEngine, fromContext } from 'store/selectors'

import { SearchResults } from 'components'

const SearchResultsContainer = props => <SearchResults {...props} />

const mapStateToProps = state => ({
  projectFlowResults: fromSearchEngine.getProjectFlowResults(state),
  wordpressContentResultsByType: fromSearchEngine.getWordpressContentResultsByType(state),
  wpContentGuides: fromSearchEngine.getWpContentByCategory(state, 'guides'),
  wpContentFaqs: fromSearchEngine.getWpContentByCategory(state, 'faqs'),
  query: fromSearchEngine.getQuery(state),
  locale: fromContext.getLocale(state),
  searchCategory: fromSearchEngine.getSearchCategory(state),
})

export default connect(mapStateToProps)(SearchResultsContainer)
