import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'

import SignInPopin from 'components/SignInPopin'

const SignInPopinContainer = ({ show }) => <SignInPopin show={show} />

SignInPopinContainer.propTypes = {
  show: PropTypes.bool,
}

const mapStateToProps = state => ({
  show: fromContext.getSignInPopin(state),
})

export default connect(mapStateToProps)(SignInPopinContainer)
