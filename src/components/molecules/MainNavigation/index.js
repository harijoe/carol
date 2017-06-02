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
    height: 100%;
    width: 100%;
  `}

  ${breakpointMax('m')`
    padding: ${theme('spaces.xxxl')} ${theme('spaces.m')} ${theme('spaces.xl')} ${theme('spaces.m')};
    background: ${theme('colors.white')};
    transform: translateY(-100%);
    transition: transform 0.3s ease-in;

    ${ifThen(show, css`
      transform: translateY(0);
    `)}
  `}

  @media screen and (max-width: 991px) and (min-width: 768px) {
    background-color: transparent;
    pointer-events: none;

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

    ${ifThen(show, css`
      pointer-events: auto;

      &::before {
        opacity: 1;
      }

      > ul {
        transform: translateX(0);
      }
    `)}
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
