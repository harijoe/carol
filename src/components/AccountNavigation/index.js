import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen, breakpoint, breakpointMax } from 'utils/style'

import AccountMenu from 'containers/AccountMenu'

const StyledNav = styled.div`
  ${({ show }) => css`
  pointer-events: none;

  ${ifThen(
    show,
    css`
    pointer-events: auto;
  `,
  )}

  ${breakpointMax('m')`
    transform: translateY(-100%);
    transition: transform 0.3s ease-in;

    ${ifThen(
      show,
      css`
      transform: translateY(0);
    `,
    )}
  `}

  ${breakpointMax('l')`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 25;
    height: 100%;
    width: 100%;
  `}

  @media screen and (max-width: 991px) and (min-width: 768px) {
    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      background-color: rgba(19, 19, 19, 0.8);
      opacity: 0;
      content: '';
      transition: opacity 0.1s ease;
    }

    > ul {
      transform: translateX(-100%);
      transition: transform 0.2s 0.2s ease-in;
    }

    ${ifThen(
      show,
      css`
      &::before {
        opacity: 1;
      }

      > ul {
        transform: translateX(0);
      }
    `,
    )}
  }

  ${breakpoint('l')`
    position: absolute;
    right: 0;
    top: 5.2rem;
    opacity: 0;
    background: ${theme('colors.white')};
    transition: opacity 0.15s ease-in;

    ${ifThen(
      show,
      css`
      opacity: 1;
    `,
    )}
  `}
`};
`

const HitBox = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

const AccountNavigation = ({ show, toggleAccountNavigation }) =>
  <div>
    {show && <HitBox onClick={toggleAccountNavigation} />}
    <StyledNav show={show}>
      {show && <AccountMenu />}
    </StyledNav>
  </div>

AccountNavigation.propTypes = {
  show: PropTypes.bool,
  toggleAccountNavigation: PropTypes.func,
}

export default AccountNavigation
