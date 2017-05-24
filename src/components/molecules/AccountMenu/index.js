import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint } from 'utils/style'

import { List, Link } from 'components'

const StyledList = styled(List)`${() => css`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: ${theme('spaces.xxl')} ${theme('spaces.m')} 0 ${theme('spaces.m')};
  height: 100%;
  width: 100%;
  list-style: none;
  background-color: ${theme('colors.white')};
  box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.5);
  pointer-events: auto;

  @media screen and (max-width: 991px) and (min-width: 768px) {
    width: 70%;
  }

  ${breakpoint('l')`
    padding: ${theme('spaces.l')} ${theme('spaces.l')} 0 ${theme('spaces.l')};

    li:first-child a {
      padding-top: 0;
    }
  `}

  ${breakpoint('l')`
    border-top: 0.2rem solid ${theme('colors.primary')};
    box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);

    &::before {
      position: absolute;
      left: 50%;
      top: -0.5rem;
      margin-left: -0.25rem;
      width: 0; 
      height: 0; 
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      border-bottom: 0.5rem solid ${theme('colors.primary')};
      content: '';
    }
  `}

  li:last-child {
    text-align: center;
    background: ${theme('colors.grayscale.lightest')};
    border-top: 0.1rem solid ${theme('colors.grayscale.light')};
    margin-left: -${theme('spaces.m')};
    margin-right: -${theme('spaces.m')};
    margin-top: auto;
    padding: ${theme('spaces.m')};

    ${breakpoint('l')`
      margin-top: ${theme('spaces.l')};
      margin-left: -${theme('spaces.l')};
      margin-right: -${theme('spaces.l')};
    `}
  }
`}`

const StyledLink = styled(Link)`
  display: block;
  padding-bottom: ${theme('spaces.s')};
  padding-top: ${theme('spaces.s')};
  color: ${theme('colors.black')};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme('colors.secondary')};
  }

  ${breakpoint('m')`
    padding-bottom: calc(${theme('spaces.l')} / 2);
    padding-top: calc(${theme('spaces.l')} / 2);
    min-width: 22rem;
  `}
`

const LogOutLink = styled(Link)`
  display: inline-block;
`

const AccountMenu = ({ logout }) => (
  <StyledList>
    <li><StyledLink to="/projects"><FormattedMessage id="user.my_projects" /></StyledLink></li>
    <li>
      <LogOutLink onClick={logout} highlight><FormattedMessage id="user.log_out" /></LogOutLink>
    </li>
  </StyledList>
)

AccountMenu.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default AccountMenu
