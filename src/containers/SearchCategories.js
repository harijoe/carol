import React from 'react'
import { connect } from 'react-redux'
import { setSearchCategory } from 'store/actions'
import SearchCategories from 'components/SearchResults/molecules/SearchCategories'
import { fromSearchEngine } from 'store/selectors'

const SearchCategoriesContainer = props => <SearchCategories {...props} />

const mapStateToProps = state => ({
  searchCategory: fromSearchEngine.getSearchCategory(state),
  wordpressContentResultsByType: fromSearchEngine.getWordpressContentResultsByType(state),
  wordpressContentResults: fromSearchEngine.getWordpressContentResults(state),
  projectFlowResults: fromSearchEngine.getProjectFlowResults(state),
})
const mapDispatchToProps = dispatch => ({
  setSearchCategory: category => dispatch(setSearchCategory(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCategoriesContainer)
