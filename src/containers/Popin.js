import React from 'react'
import { connect } from 'react-redux'
import { closeAll } from 'store/actions'

import Popin from 'components/Popin'

const PopinContainer = props => <Popin {...props} />

const mapDispatchToProps = dispatch => ({
  closeAll: () => dispatch(closeAll()),
})

export default connect(null, mapDispatchToProps)(PopinContainer)
