import React from 'react'
import { connect } from 'react-redux'
import { projectElaborationSetResults, toggleSearchModal } from 'store/actions'

import SearchEngine from 'components/SearchEngine'

const SearchEngineContainer = props => <SearchEngine {...props} />

const mapDispatchToProps = dispatch => ({
  resetResults: () => dispatch(projectElaborationSetResults(null)),
  toggleSearchModal: bool => dispatch(toggleSearchModal(bool)),
})

export default connect(null, mapDispatchToProps)(SearchEngineContainer)
