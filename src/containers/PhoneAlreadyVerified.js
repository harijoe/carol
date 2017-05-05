import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromUser } from 'store/selectors'

import { PhoneAlreadyVerified } from 'components'

const PhoneAlreadyVerifiedContainer = props => (
  <PhoneAlreadyVerified {...props} />
)

const mapStateToProps = state => ({
  verified: fromUser.getMobilePhoneVerified(state),
})

PhoneAlreadyVerifiedContainer.propTypes = {
  children: PropTypes.any,
  verified: PropTypes.bool,
}

export default connect(mapStateToProps)(PhoneAlreadyVerifiedContainer)
