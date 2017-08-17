import React from 'react'
import { connect } from 'react-redux'
import { projectElaborationSearch } from 'store/actions'

import { SearchInput } from 'components'

const SearchInputContainer = props => <SearchInput {...props} />

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(projectElaborationSearch(query)),
})

export default connect(null, mapDispatchToProps)(SearchInputContainer)
