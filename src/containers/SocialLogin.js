import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import FacebookLoginBase from 'react-facebook-login'
import GoogleLoginBase from 'react-google-login'

import { authLogin } from 'store/actions'

class SocialLoginContainer extends Component {
  static propTypes = {
    request: PropTypes.func.isRequired,
    platform: PropTypes.string,
    grantType: PropTypes.string,
  }

  constructor() {
    super()

    this.handleResponse = this.handleResponse.bind(this)
  }

  handleResponse({ accessToken }) {
    this.props.request(accessToken)
  }

  render() {
    const { platform, ...props } = this.props

    switch (platform) {
      case 'facebook':
        return (<FacebookLoginBase callback={this.handleResponse} {...props} />)
      case 'google':
      default:
        return (<GoogleLoginBase onSuccess={this.handleResponse} {...props} />)
    }
  }
}

const mapDispatchToProps = (dispatch, { grantType }) => ({
  request: accessToken => dispatch(authLogin(grantType).request(`&access_token=${accessToken}`)),
})

export default connect(null, mapDispatchToProps)(SocialLoginContainer)
