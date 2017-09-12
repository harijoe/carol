import React from 'react'
import { connect } from 'react-redux'
import { projectElaborationSetResults } from 'store/actions'

import { SearchEngine } from 'components'

const SearchEngineContainer = props => <SearchEngine {...props} />

const mapDispatchToProps = dispatch => ({
  resetResults: () => dispatch(projectElaborationSetResults(null)),
})

export default connect(null, mapDispatchToProps)(SearchEngineContainer)
