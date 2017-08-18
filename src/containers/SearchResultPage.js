import React from 'react'
import { connect } from 'react-redux'
import { projectElaborationSearch } from 'store/actions'
import { SearchResultPage } from 'components'
import { fromRouting } from 'store/selectors'

const SearchResultPageContainer = props => <SearchResultPage {...props} />

const mapStateToProps = state => ({
  query: fromRouting.getQuery(state),
})
const mapDispatchToProps = dispatch => ({
  search: query => dispatch(projectElaborationSearch(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPageContainer)
