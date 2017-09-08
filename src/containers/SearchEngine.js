import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { projectElaborationSetResults } from 'store/actions'

import { SearchEngine } from 'components'

const SearchEngineContainer = props => <SearchEngine {...props} />

SearchEngineContainer.propTypes = {
  locale: PropTypes.string,
}

const mapDispatchToProps = dispatch => ({
  resetResults: () => dispatch(projectElaborationSetResults(null)),
})

export default connect(null, mapDispatchToProps)(SearchEngineContainer)
