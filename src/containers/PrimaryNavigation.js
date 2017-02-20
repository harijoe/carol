import React from 'react'
import { connect } from 'react-redux'

import { fromAuth } from 'store/selectors'
import { PrimaryNavigation } from 'components'

const PrimaryNavigationContainer = props => (
  <PrimaryNavigation {...props} />
)

const mapStateToProps = state => ({
  isAuthenticated: fromAuth.isLoggedIn(state),
})

export default connect(mapStateToProps)(PrimaryNavigationContainer)
