import React from 'react'
import { FormattedMessage } from 'react-intl'

const ForgotPasswordConfirmation = () => {
  return (
    <div>
      <h1><FormattedMessage id="user.thank_you" /></h1>
      <FormattedMessage id="user.reset_password_email" tagName="p" />
    </div>
  )
}

export default ForgotPasswordConfirmation
