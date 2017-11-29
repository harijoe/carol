import React from 'react'
import { connect } from 'react-redux'
import { closeAll } from 'store/actions'

import CloseAllButton from 'components/CloseAllButton'

const CloseAllButtonContainer = props => <CloseAllButton {...props} />

const mapDispatchToProps = dispatch => ({
  closeAll: () => dispatch(closeAll()),
})

export default connect(null, mapDispatchToProps)(CloseAllButtonContainer)
