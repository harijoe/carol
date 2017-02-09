import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { colors } from 'components/globals'
import { Link } from 'components'
import { BurgerMenu, SignInForm } from 'containers'

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

const PrimaryNavigation = props => (
  <Nav>
    <li><BurgerMenu /></li>
    <li><StyledLink to="/" onlyActiveOnIndex activeClassName="active"><FormattedMessage id="home" tagName="span" /></StyledLink></li>
    <li><SignInForm {...props} /></li>
  </Nav>
)

export default PrimaryNavigation
