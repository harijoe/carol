import React from 'react'
import { connect } from 'react-redux'
import { projectElaborationSearch } from 'store/actions'
import { fromSearchEngine } from 'store/selectors'

import { SearchTerm } from 'components'

const SearchTermContainer = props => <SearchTerm {...props} />

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(projectElaborationSearch(query)),
})

const mapStateToProps = state => ({
  query: fromSearchEngine.getQuery(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchTermContainer)
