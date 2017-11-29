import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import SignInForm from 'containers/SignInForm'
import Popin from 'containers/Popin'

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
  
    ${breakpointMax('xl')`
      margin-top: 40px;
      margin-left: -25px;
      margin-bottom: -60px;
      width: calc(100% + 50px);
    `}

    ${breakpoint('xl')`
      margin-top: 40px;
      margin-left: -50px;
      margin-bottom: -50px;
      width: calc(100% + 100px);
    `}
  }
`

const SignInPopin = ({ show }) =>
  <Popin show={show}>
    <StyledSignInForm />
  </Popin>

SignInPopin.propTypes = {
  show: PropTypes.bool,
}

export default SignInPopin
