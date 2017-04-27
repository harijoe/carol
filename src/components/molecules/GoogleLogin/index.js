import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import { google } from 'config'
import messages from 'utils/messages'
import { SocialLogin } from 'containers'

const GoogleLogin = ({ intl, buttonStyle }) => (
  <SocialLogin
    platform="google"
    clientId={google.clientId}
    grantType={google.grantType}
    buttonText={intl.formatMessage(messages('user.continue_with_google').label)}
    buttonStyle={buttonStyle}
    onFailure={() => {}}
    scope={google.scope}
  />
)

GoogleLogin.propTypes = {
  intl: intlShape.isRequired,
  buttonStyle: PropTypes.string,
}

export default injectIntl(GoogleLogin)
