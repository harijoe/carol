import React from 'react'
import PropTypes from 'prop-types'

import injectTranslate from 'i18n/hoc/injectTranslate'
import { google } from 'config'
import { SocialLogin } from 'containers'

const GoogleLogin = ({ translate, buttonStyle }) =>
  <SocialLogin
    platform="google"
    clientId={google.clientId}
    grantType={google.grantType}
    buttonText={translate('user.continue_with_google')}
    buttonStyle={buttonStyle}
    onFailure={() => {}}
    scope={google.scope}
  />

GoogleLogin.propTypes = {
  translate: PropTypes.func.isRequired,
  buttonStyle: PropTypes.string,
}

export default injectTranslate(GoogleLogin)
