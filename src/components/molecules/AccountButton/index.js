import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, ifThen, breakpointMax, breakpoint } from 'utils/style'
import injectScroll from 'hoc/component/injectScroll'

import { Icon } from 'components'

const Wrapper = styled.div`${({ homepage, atTop }) => css`
  position: relative;
  box-sizing: content-box;
  cursor: pointer;
  margin: 0;
  transition: all 0.3s ease;

  ${breakpointMax('l')`
    margin-right: ${theme('spaces.s')};
    height: ${theme('icons.size.l')};
    width: ${theme('icons.size.l')};
  `}

  ${breakpoint('l')`
    display: flex;
    align-items: center;
  `}

  ${ifThen(homepage, css`
    .qs-header-cnx {
      fill: ${theme('colors.white')};
    }

    p {
      color: ${theme('colors.white')};
    }
  `)} 

  ${ifThen(!homepage || !atTop, css`
    .qs-header-cnx {
      fill: ${theme('colors.black')};
    }

    p {
      color: ${theme('colors.black')};
    }
  `)}

  &:hover {
    .qs-header-cnx {
      fill: ${theme('colors.secondary')};
    }

    p {
      color: ${theme('colors.secondary')};
    }
  }
`}`

const SignLabel = styled.p`
  display: inline-block;
  margin: 0 0 0 ${theme('spaces.m')} ;
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.s')};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme('colors.secondary')};
  }

  ${breakpointMax('l')`
    display: none;
  `}

  ${breakpoint('xl')`
    font-size: ${theme('fonts.size.base')};
  `}
`

const AccountButton = ({ atTop, authenticated, toggleAccountNavigation, toggleSignInPopin, homepage, firstName }) => (
  <Wrapper homepage={homepage} atTop={atTop} onClick={authenticated ? toggleAccountNavigation : toggleSignInPopin}>
    <Icon
      size={32}
      icon="login"
    />
    <SignLabel>
      {authenticated ? firstName : <FormattedMessage id="login" />}
    </SignLabel>
  </Wrapper>
)

AccountButton.propTypes = {
  toggleAccountNavigation: PropTypes.func,
  toggleSignInPopin: PropTypes.func,
  firstName: PropTypes.string,
  atTop: PropTypes.bool,
  authenticated: PropTypes.bool,
  homepage: PropTypes.bool,
}

export default injectScroll(AccountButton)
