import React from 'react'
import { connect } from 'react-redux'

import { PopinAccount } from 'components'
import { fromContext, fromAuth } from 'store/selectors'
import { togglePopinAccount } from 'store/actions'

const PopinAccountContainer = (({ ...props }) => (
  <PopinAccount {...props} />
))

PopinAccountContainer.propTypes = {
  show: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  show: fromContext.getPopinAccount(state),
  isAuthenticated: fromAuth.isAuthenticated(state),
})
const mapDispatchToProps = dispatch => ({
  togglePopinAccount: () => dispatch(togglePopinAccount()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PopinAccountContainer)
