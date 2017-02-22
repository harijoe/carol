import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { colors } from 'components/globals'
import { Link } from 'components'
import { BurgerMenu, DropDownMenu, AccountMenu } from 'containers'
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
  color: ${[...colors.grayscale].reverse()[3]};
  font-size: 1.25rem;

  &.active {
    color: ${[...colors.grayscale].reverse()[0]};
  }
`

const StyledAccountMenu = styled(AccountMenu)``
const StyledSignInDropDownMenu = styled(SignInDropDownMenu)``

StyledAccountMenu.displayName = 'AccountMenu'
StyledSignInDropDownMenu.displayName = 'SignInDropDownMenu'

const PrimaryNavigation = ({ isAuthenticated, ...props }) => (
  <Nav>
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
  </Nav>
)

PrimaryNavigation.propTypes = {
  isAuthenticated: PropTypes.bool,
}

export default PrimaryNavigation
