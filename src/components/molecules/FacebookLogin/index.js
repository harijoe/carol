import React from 'react'
import { injectIntl, intlShape } from 'react-intl'

import { facebook } from 'config'
import messages from 'utils/messages'
import { SocialLogin } from 'containers'

const FacebookLogin = ({ intl }) => (
  <SocialLogin
    platform="facebook"
    appId={facebook.appId}
    grantType={facebook.grantType}
    icon="fa-facebook"
    size="small"
    textButton={intl.formatMessage(messages('user.continue_with_facebook').label)}
    scope={facebook.scope}
  />
)

FacebookLogin.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(FacebookLogin)
