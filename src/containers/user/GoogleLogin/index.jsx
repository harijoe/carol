import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import GoogleLoginBase from 'react-google-login'
import messages from '../../../utils/messages'
import { getTokenAction } from '../../../utils/token'
import config from '../../../config'

class GoogleLogin extends Component {
  constructor() {
    super()

    this.handleGoogleResponse = this.handleGoogleResponse.bind(this)
  }

  handleGoogleResponse(response) {
    if (response.accessToken) {
      this.props.getTokenAction(config.googleGrantType, response.accessToken)
    }
  }

  render() {
    return (
      <GoogleLoginBase
        clientId={config.googleClientId}
        buttonText={this.props.intl.formatMessage(messages('user.continue_with_google').label)}
        onSuccess={this.handleGoogleResponse}
        onFailure={() => {}}
        scope={config.googleScope}
      />
    )
  }
}

GoogleLogin.propTypes = {
  getTokenAction: React.PropTypes.func,
  intl: intlShape.isRequired
}

export default connect(null, { getTokenAction })(injectIntl(GoogleLogin))
