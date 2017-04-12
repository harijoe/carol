import React from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { AccountButton } from 'containers'

const Nav = styled.nav`
  position: absolute;
  right: 55px;
  top: 0;
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

const StyledItemLogin = styled.li`
  right: 60px;
`

const PrimaryNavigation = () => (
  <Nav>
    <StyledItemLogin>
      <AccountButton />
    </StyledItemLogin>
  </Nav>
)

export default PrimaryNavigation
