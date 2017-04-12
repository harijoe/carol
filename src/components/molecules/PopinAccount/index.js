import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { PopinWrapper } from 'components'
import { AccountMenu, SignInForm } from 'containers'

const StyledAccountMenu = styled(AccountMenu)`
  margin: auto;
`

const StyledSignInForm = styled(SignInForm)`
  margin: auto;
  margin-top: 60px;

  .social {
    width: calc(100% - 10px);
    border: none;
    box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.15);
    margin: 5px;
    padding: 15px;

    &.facebook {
      background: #3a5a97;
      color: white;
    }

    .fa-facebook::before {
      content: "";
    }

    &.google {
      background: white;
    }
  }

  form .social {
    text-align: center;
  }

  .footer {
    text-align: center;
    background: ${theme('colors.grey')};
    padding: 15px;
    height: 20%;
    position: absolute;
    width: 100%;
    bottom: 0;
    margin: -15px;
  }
`

const menuFlag = 'menu'
const signinFlag = 'signin'

/*
  React component is necessary to add hysterisis to the PopinAccount component (usage of componentWillReceiveProps).
  It is used to prevent unwanted content blinking on login/logout during the css transition closing animation.
 */
class PopinAccount extends Component {
  static propTypes = {
    show: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
  }

  state = {
    active: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.props.show) {
      this.setState({ active: this.props.isAuthenticated ? menuFlag : signinFlag })
    }
  }

  render() {
    return (
      <PopinWrapper show={this.props.show}>
        { this.state.active === menuFlag ? <StyledAccountMenu /> : null}
        { this.state.active === signinFlag ? <StyledSignInForm /> : null}
      </PopinWrapper>
    )
  }
}

PopinAccount.propTypes = {
  show: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
}

export default PopinAccount
