import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen, mapBreakpoints, breakpoint, breakpointMax } from 'utils/style'
import injectScroll from 'hoc/component/injectScroll'

import { MainWrapper } from 'components'
import {
  AccountButton,
  MainNavigation,
  AccountNavigation,
  BurgerButton,
  SignInPopin,
  QuotatisLogo,
  PhoneValidationPopin,
  EmailValidationPopin,
} from 'containers'

const Background = styled.div`
  ${({ atTop }) => css`
  width: 100%;
  transition: height 300ms ease-in-out, background-color 300ms ease-in-out;
  ${ifThen(
    !atTop,
    `
    transition: background-color 200ms ease-out;
    background-color: white;
    box-shadow: 0 0.1rem 0 #D1D1D1;
  `,
  )};
`};
`

const StyledMainWrapper = styled(MainWrapper)`${({ transparent }) => css`
  display: flex;
  min-height: 5.6rem;
  ${mapBreakpoints(
    bp => css`
    padding: 0 ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `,
  )}

  ${ifThen(
    !transparent,
    `
    background-color: white;
    box-shadow: 0 0.1rem 0 #D1D1D1;
  `,
    `
    background-color: transparent;
  `,
  )};
`}`

const SecondNavigation = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  margin-left: auto;

  ${breakpointMax('l')`
    align-items: center;
  `} 

  ${breakpoint('l')`
    margin-left: 0;
    padding-left: ${theme('spaces.m')};

    &::before {
      position: absolute;
      left: -0.2rem;
      top: 50%;
      margin-top: -0.2rem;
      height: 0.4rem;
      width: 0.4rem;
      content: '';
      background-color: ${theme('colors.grayscale.lighter')};
      border-radius: 2rem;
    }
  `} 

  ${breakpoint('xl')`
    padding-left: ${theme('spaces.l')};
  `};
`

const Header = ({ atTop, isHomepage, isProHomepage }) =>
  <Background atTop={atTop}>
    <StyledMainWrapper transparent={isHomepage || isProHomepage}>
      <QuotatisLogo />
      <MainNavigation />
      <SecondNavigation>
        <AccountButton />
        <BurgerButton />
      </SecondNavigation>
      <AccountNavigation />
      <SignInPopin />
      <PhoneValidationPopin />
      <EmailValidationPopin />
    </StyledMainWrapper>
  </Background>

Header.propTypes = {
  atTop: PropTypes.bool,
  isHomepage: PropTypes.bool,
  isProHomepage: PropTypes.bool,
}

export default injectScroll(Header)
