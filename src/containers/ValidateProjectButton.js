import React from 'react'
import { connect } from 'react-redux'
import { fromAuth } from 'store/selectors'
import { toggleChatbotPopin, setRedirectPathname } from 'store/actions'

import { ValidateProjectButton } from 'components'

const ValidateProjectButtonContainer = props => <ValidateProjectButton {...props} />

const mapStateToProps = state => ({
  authenticated: fromAuth.isAuthenticated(state),
})

const mapDispatchToProps = dispatch => ({
  setRedirectPathname: redirectPathname => dispatch(setRedirectPathname(redirectPathname)),
  openPopin: () => dispatch(toggleChatbotPopin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ValidateProjectButtonContainer)
