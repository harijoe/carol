import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme } from 'utils/style'
import { Link, BurgerButton } from 'components'
import { BurgerMenu, DropDownMenu, AccountMenu, CountryMenu } from 'containers'
import SignInDropDownMenu from './SignInDropDownMenu'

const Nav = styled.nav`
  display: flex;
  list-style: none;

  & > :not(:first-child) {
    margin-left: 1rem;
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
    <li><BurgerButton /></li>
    <li><BurgerMenu /></li>
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
    <li><CountryMenu /></li>
  </Nav>
)

PrimaryNavigation.propTypes = {
  isAuthenticated: PropTypes.bool,
}

export default PrimaryNavigation
