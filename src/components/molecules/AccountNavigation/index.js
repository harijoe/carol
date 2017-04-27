import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen, breakpoint, breakpointMax } from 'utils/style'

import { AccountMenu } from 'containers'

const StyledNav = styled.div`${({ show }) => css`
  background: ${theme('colors.white')};
  transform: translateY(-150%);
  transition: transform 0.3s ease-in;
  pointer-events: none;

  ${ifThen(show, css`
    transform: translateY(0);
  `)}

  ${breakpointMax('l')`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 25;
    padding: ${theme('spaces.xxxl')} ${theme('spaces.m')} ${theme('spaces.xl')} ${theme('spaces.m')};
    height: 100%;
    width: 100%;
    background: rgba(19, 19, 19, 0.85);
  `}

  ${breakpoint('l')`
    position: absolute;
    right: 0;
    top: 5.2rem;
  `}
`}`

const HitBox = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

const AccountNavigation = ({ show, toggleAccountNavigation }) => (
  <div>
    {show && <HitBox onClick={toggleAccountNavigation} />}
    <StyledNav show={show}>
      <AccountMenu />
    </StyledNav>
  </div>
)

AccountNavigation.propTypes = {
  show: PropTypes.bool,
  toggleAccountNavigation: PropTypes.func,
}

export default AccountNavigation
