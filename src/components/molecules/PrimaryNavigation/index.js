import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { LogInButton } from 'components'
import { AccountMenu, BurgerButton, DropDownMenu } from 'containers'
import SignInDropDownMenu from './SignInDropDownMenu'

const Nav = styled.nav`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  height: ${theme('spaces.xxl')};
  margin-right: ${theme('spaces.m')};
  margin-top: ${theme('spaces.m')};
  list-style: none;

  & > :first-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${theme('spaces.xxl')};
    width: ${theme('spaces.xxl')};
    padding: ${theme('spaces.s')};
  }

  & > :last-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${theme('spaces.xxl')};
    width: ${theme('spaces.xxl')};
  }
`

const StyledAccountMenu = styled(AccountMenu)`
  display: block;
`
const StyledSignInDropDownMenu = styled(SignInDropDownMenu)`
  display: block;
`

StyledAccountMenu.displayName = 'AccountMenu'
StyledSignInDropDownMenu.displayName = 'SignInDropDownMenu'

const PrimaryNavigation = ({ isAuthenticated, ...props }) => (
  <Nav>
    <li>
      {
        isAuthenticated ?
          <DropDownMenu label="user.my_account"><StyledAccountMenu /></DropDownMenu>
          : <StyledSignInDropDownMenu {...props} />
      }
    </li>
    <li><LogInButton /></li>
    <li><BurgerButton /></li>
  </Nav>
)

PrimaryNavigation.propTypes = {
  isAuthenticated: PropTypes.bool,
}

export default PrimaryNavigation
