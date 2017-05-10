import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { SignInForm, Popin } from 'containers'

const StyledSignInForm = styled(SignInForm)`
  margin: auto;
  margin-top: 40px;

  .footer {
    text-align: center;
    background: ${theme('colors.grey')};
    padding: 15px;
    width: 100%;
    height: 20%;
    margin: -16px;
    position: absolute;
    bottom: 0;

    ${breakpoint('m')`
      position: static;
    `}

    ${breakpoint('l')`
      margin-top: 40px;
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
