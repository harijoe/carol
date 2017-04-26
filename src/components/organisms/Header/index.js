import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, ifThen, mapBreakpoints, breakpoint } from 'utils/style'
import injectScroll from 'hoc/component/injectScroll'

import { MainWrapper } from 'components'
import { AccountButton, MainNavigation, AccountNavigation, BurgerButton, SignInPopin, QuotatisLogo } from 'containers'

const Background = styled.div`${({ atTop }) => css`
  width: 100%;
  transition: height 300ms ease-in-out, background-color 300ms ease-in-out;
  ${ifThen(!atTop, `
    transition: background-color 200ms ease-out;
    background-color: white;
    box-shadow: 0 0.1rem 0 #D1D1D1;
  `)};
`}`

const StyledMainWrapper = styled(MainWrapper)`${({ homepage }) => css`
  display: flex;
  align-items: center;
  min-height: 5.6rem;
  ${mapBreakpoints(bp => css`
    padding: 0 ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}

  ${ifThen(!homepage, `
    background-color: white;
    box-shadow: 0 0.1rem 0 #D1D1D1;
  `)};
`}`

const SecondNavigation = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  margin-left: auto;

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
  `}
`

const Header = ({ atTop, homepage }) => (
  <Background atTop={atTop}>
    <StyledMainWrapper homepage={homepage}>
      <QuotatisLogo />
      <MainNavigation />
      <SecondNavigation>
        <AccountButton />
        <BurgerButton />
      </SecondNavigation>
      <AccountNavigation />
      <SignInPopin />
    </StyledMainWrapper>
  </Background>
)

Header.propTypes = {
  atTop: PropTypes.bool,
  homepage: PropTypes.bool,
}

export default injectScroll(Header)
