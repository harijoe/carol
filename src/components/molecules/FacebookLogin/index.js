import React from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { facebook } from 'config'
import { SocialLogin } from 'containers'

const FacebookLogin = ({ translate }) => (
  <SocialLogin
    platform="facebook"
    appId={facebook.appId}
    grantType={facebook.grantType}
    icon="fa-facebook"
    size="small"
    textButton={translate('user.continue_with_facebook')}
    scope={facebook.scope}
  />
)

FacebookLogin.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(FacebookLogin)
