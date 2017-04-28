import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen, breakpointMax, breakpoint } from 'utils/style'

import { MainMenu } from 'containers'

const Wrapper = styled.div`
  ${breakpoint('l')`
    margin-left: auto;
    padding-left: 7.8rem;
  `}
`

const StyledNav = styled.nav`${({ show }) => css`
  ${breakpointMax('l')`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 25;
    padding: ${theme('spaces.xxxl')} ${theme('spaces.m')} ${theme('spaces.xl')} ${theme('spaces.m')};
    height: 100%;
    width: 100%;
    background: ${theme('colors.white')};
    transform: translateY(-100%);
    transition: transform 0.3s ease-in;

    ${ifThen(show, css`
      transform: translateY(0);
    `)}
  `}

  @media screen and (max-width: 991px) and (min-width: 768px) {
    background: rgba(19, 19, 19, 0.8);
  }
`}`

const HitBox = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

const MainNavigation = ({ show, toggleMainNavigation }) => (
  <Wrapper>
    {show && <HitBox onClick={toggleMainNavigation} />}
    <StyledNav {...{ show }}>
      <MainMenu />
    </StyledNav>
  </Wrapper>
)

MainNavigation.propTypes = {
  show: PropTypes.bool,
  toggleMainNavigation: PropTypes.func,
}

export default MainNavigation
