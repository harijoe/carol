import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { connect } from 'react-redux'
import FacebookLoginBase from 'react-facebook-login'
import messages from '../../../utils/messages'
import { getTokenAction } from '../../../utils/token'
import config from '../../../config'

class FacebookLogin extends Component {
  constructor() {
    super()

    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseFacebook(response) {
    this.props.getTokenAction(config.facebookGrantType, response.accessToken)
  }

  render() {
    return (
      <FacebookLoginBase
        appId={config.facebookAppId}
        callback={this.responseFacebook}
        icon="fa-facebook"
        size="small"
        textButton={this.props.intl.formatMessage(messages('user.continue_with_facebook').label)}
        scope={config.facebookScope}
      />
    )
  }
}

FacebookLogin.propTypes = {
  getTokenAction: React.PropTypes.func,
  intl: intlShape
}

export default connect(null, { getTokenAction })(injectIntl(FacebookLogin))
