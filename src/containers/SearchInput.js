import React from 'react'
import { connect } from 'react-redux'
import { projectElaborationSearch } from 'store/actions'
import { fromSearchEngine } from 'store/selectors'

import SearchInput from 'components/SearchInput'

const SearchInputContainer = props => <SearchInput {...props} />

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(projectElaborationSearch(query)),
})

const mapStateToProps = state => ({
  query: fromSearchEngine.getQuery(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputContainer)
