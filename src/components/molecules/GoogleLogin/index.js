import React from 'react'
import { injectIntl, intlShape } from 'react-intl'

import { google } from 'config'
import messages from 'utils/messages'
import { SocialLogin } from 'containers'

const GoogleLogin = ({ intl }) => (
  <div>
    <SocialLogin
      platform="google"
      clientId={google.clientId}
      grantType={google.grantType}
      buttonText={intl.formatMessage(messages('user.continue_with_google').label)}
      onFailure={() => {}}
      scope={google.scope}
    />
  </div>
)

GoogleLogin.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(GoogleLogin)
