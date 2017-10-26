import React from 'react'
import { connect } from 'react-redux'
import { fromSearchEngine, fromContext } from 'store/selectors'

import { SearchResults } from 'components'

const SearchResultsContainer = props => <SearchResults {...props} />

const mapStateToProps = state => ({
  projectFlowResults: fromSearchEngine.getProjectFlowResults(state),
  wordpressContentResultsByType: fromSearchEngine.getWordpressContentResultsByType(state),
  wpContentGuides: fromSearchEngine.getWpContentGuides(state),
  wpContentFaqs: fromSearchEngine.getWpContentFaqs(state),
  query: fromSearchEngine.getQuery(state),
  locale: fromContext.getLocale(state),
  searchCategory: fromSearchEngine.getSearchCategory(state),
  isWordpressContentEnabled: fromContext.isFeatureEnabled(state, 'wordpress_content'),
})

export default connect(mapStateToProps)(SearchResultsContainer)
