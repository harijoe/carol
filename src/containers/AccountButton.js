import React from 'react'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'
import { togglePopinAccount } from 'store/actions'

import { AccountButton } from 'components'

const AccountButtonContainer = props => (
  <AccountButton {...props} />
)

const mapStateToProps = state => ({
  popinAccount: fromContext.getPopinAccount(state),
})

const mapDispatchToProps = dispatch => ({
  togglePopinAccount: () => dispatch(togglePopinAccount()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountButtonContainer)
