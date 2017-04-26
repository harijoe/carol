import React from 'react'
import { connect } from 'react-redux'
import { fromContext, fromAuth } from 'store/selectors'
import { toggleAccountNavigation } from 'store/actions'

import { AccountNavigation } from 'components'

const AccountNavigationContainer = (({ ...props }) => (
  <AccountNavigation {...props} />
))

AccountNavigationContainer.propTypes = {
  show: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  show: fromContext.getAccountNavigation(state) && fromAuth.isAuthenticated(state),
})
const mapDispatchToProps = dispatch => ({
  toggleAccountNavigation: () => dispatch(toggleAccountNavigation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountNavigationContainer)
