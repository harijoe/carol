import React from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'

import config from 'config'
import SocialLogin from 'containers/SocialLogin'

const FacebookLogin = ({ translate }) =>
  <SocialLogin
    platform="facebook"
    appId={config.facebook.appId}
    grantType={config.facebook.grantType}
    icon="fa-facebook"
    size="small"
    textButton={translate('user.continue_with_facebook')}
    scope={config.facebook.scope}
  />

FacebookLogin.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(FacebookLogin)
