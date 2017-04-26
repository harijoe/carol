import React from 'react'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'
import { toggleSignInPopin } from 'store/actions'

import { SignInPopin } from 'components'

const SignInPopinContainer = ({ show }) => (
  <SignInPopin show={show} />
)

SignInPopinContainer.propTypes = {
  show: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  show: fromContext.getSignInPopin(state),
})

const mapDispatchToProps = dispatch => ({
  toggleSignInPopin: () => dispatch(toggleSignInPopin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInPopinContainer)
