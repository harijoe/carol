import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FacebookLoginBase from 'react-facebook-login'
import GoogleLoginBase from 'react-google-login'
import styled from 'styled-components'
import { authLogin } from 'store/actions'
import { theme } from 'utils/style'

import { Icon } from 'components'

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  left: 13px;
`

const Wrapper = styled.div`
  position: relative;
  
  .social {
    width: calc(100% - 10px);
    border: none;
    box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.15);
    margin: 5px;
    padding: 15px;

    &.facebook {
      background: #3a5a97;
      color: ${theme('colors.white')};
    }

    .fa-facebook::before {
      content: "";
    }

    &.google {
      background: ${theme('colors.white')};
    }
  }

  form .social {
    text-align: center;
  }
`

class SocialLoginContainer extends Component {
  static propTypes = {
    request: PropTypes.func.isRequired,
    platform: PropTypes.string,
    grantType: PropTypes.string,
  }

  handleAnswer = ({ accessToken }) => {
    this.props.request(accessToken)
  }

  render() {
    const { platform, ...props } = this.props
    let SocialButton

    switch (platform) {
      case 'facebook':
        SocialButton = <FacebookLoginBase callback={this.handleAnswer} cssClass="social facebook" {...props} />
        break
      case 'google':
        SocialButton = <GoogleLoginBase onSuccess={this.handleAnswer} className="social google" {...props} />
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
