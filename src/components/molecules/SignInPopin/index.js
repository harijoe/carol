import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { SignInForm, Popin } from 'containers'

const StyledSignInForm = styled(SignInForm)`
  margin: auto;
  margin-top: 10px;

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

  .footer {
    text-align: center;
    background: ${theme('colors.grey')};
    padding: 15px;
    height: 20%;
    margin: -15px;
    position: absolute;
    bottom: 0;
    width: calc(100% + 50px);
    margin-left: -25px;
    margin-bottom: -25px;

    ${breakpoint('m')`
      position: static;
    `}

    ${breakpoint('l')`
      margin-left: -50px;
      margin-bottom: -50px;
      width: calc(100% + 100px);
    `
  }
`

const SignInPopin = ({ show }) => (
  <Popin show={show}>
    <StyledSignInForm />
  </Popin>
)

SignInPopin.propTypes = {
  show: PropTypes.bool,
}

export default SignInPopin
