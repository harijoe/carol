import React from 'react'
import { connect } from 'react-redux'
import { projectElaborationSearch, setSearchCategory } from 'store/actions'
import SearchResultPage from 'pages/SearchResultPage'
import { fromRouting } from 'store/selectors'

const SearchResultPageContainer = props => <SearchResultPage {...props} />

const mapStateToProps = state => ({
  query: fromRouting.getQuery(state),
})
const mapDispatchToProps = dispatch => ({
  search: query => dispatch(projectElaborationSearch(query)),
  setSearchCategory: category => dispatch(setSearchCategory(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPageContainer)
