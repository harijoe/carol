import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme } from 'utils/style'

import { Link } from 'components'
import { DropDownMenu, AccountMenu, BurgerButton } from 'containers'
import SignInDropDownMenu from './SignInDropDownMenu'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: auto;

  & > :nth-child(2) {
    margin-right: 1.6rem;
  }

  & > :last-child {
    position: relative;
    box-sizing: content-box;
    height: 2.4rem;
    width: 2.4rem;
    padding: ${theme('spaces.s')};
  }
`

const StyledLink = styled(Link)`
  font-weight: 300;
  color: ${theme('reverseColors.grayscale.medium')};
  font-size: 1.25rem;

  &.active {
    color: ${theme('reverseColors.grayscale.lightest')};
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
      <StyledLink to="/" onlyActiveOnIndex activeClassName="active">
        <FormattedMessage id="home" tagName="span" />
      </StyledLink>
    </li>
    <li>
      {
        isAuthenticated ?
          <DropDownMenu label="user.my_account"><StyledAccountMenu /></DropDownMenu>
          : <StyledSignInDropDownMenu {...props} />
      }
    </li>
    <li><BurgerButton /></li>
  </Nav>
)

PrimaryNavigation.propTypes = {
  isAuthenticated: PropTypes.bool,
}

export default PrimaryNavigation
