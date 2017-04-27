import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FacebookLoginBase from 'react-facebook-login'
import GoogleLoginBase from 'react-google-login'
import styled from 'styled-components'
import { authLogin } from 'store/actions'

import { Icon } from 'components'

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  left: 13px;
`

const Wrapper = styled.div`
  position: relative;
`

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
    let SocialButton

    switch (platform) {
      case 'facebook':
        SocialButton = <FacebookLoginBase callback={this.handleResponse} cssClass="social facebook" {...props} />
        break
      case 'google':
        SocialButton = <GoogleLoginBase onSuccess={this.handleResponse} className="social google" {...props} />
        break
      default:
    }

    return (
      <Wrapper>
        {SocialButton}
        <StyledIcon icon={`${platform}-login`} size={50} />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch, { grantType }) => ({
  request: accessToken => dispatch(authLogin(grantType).request(`&access_token=${accessToken}`)),
})

export default connect(null, mapDispatchToProps)(SocialLoginContainer)
