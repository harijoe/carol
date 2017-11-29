import React from 'react'
import { connect } from 'react-redux'
import { fromAuth, fromProjectElaboration } from 'store/selectors'
import { toggleChatbotPopin, setRedirectPathname } from 'store/actions'

import ValidateProjectButton from 'components/ValidateProjectButton'

const ValidateProjectButtonContainer = props => <ValidateProjectButton {...props} />

const mapStateToProps = state => ({
  authenticated: fromAuth.isAuthenticated(state),
  key1: fromProjectElaboration.getKey1(state),
  key2: fromProjectElaboration.getKey2(state),
})

const mapDispatchToProps = dispatch => ({
  setRedirectPathname: redirectPathname => dispatch(setRedirectPathname(redirectPathname)),
  openPopin: () => dispatch(toggleChatbotPopin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ValidateProjectButtonContainer)
