import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'

const PhoneAlreadyVerified = ({ verified, children }) => {
  if (verified) {
    return <FormattedMessage id="user.phone_already_verified" />
  }

  return <div>{children}</div>
}

PhoneAlreadyVerified.propTypes = {
  children: PropTypes.any,
  verified: PropTypes.bool,
}

export default injectIntl(PhoneAlreadyVerified)
