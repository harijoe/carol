import React from 'react'
import { connect } from 'react-redux'
import { fromContext, fromAuth, fromRouting, fromUser } from 'store/selectors'
import { toggleSignInPopin, toggleAccountNavigation } from 'store/actions'

import AccountButton from 'components/AccountButton'

const AccountButtonContainer = props => <AccountButton {...props} />

const mapStateToProps = state => ({
  accountNavigation: fromContext.getAccountNavigation(state),
  authenticated: fromAuth.isAuthenticated(state),
  isLandingPage: fromRouting.isLandingPage(state),
  firstName: fromUser.getFirstName(state),
})

const mapDispatchToProps = dispatch => ({
  toggleSignInPopin: () => dispatch(toggleSignInPopin()),
  toggleAccountNavigation: () => dispatch(toggleAccountNavigation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountButtonContainer)
