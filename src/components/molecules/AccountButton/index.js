import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, ifThen, breakpointMax, breakpoint } from 'utils/style'
import injectScroll from 'hoc/component/injectScroll'

import { Icon } from 'components'

const Wrapper = styled.div`${({ homepage, atTop }) => css`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  cursor: pointer;
  margin: 0;
  transition: all 0.3s ease;

  ${breakpointMax('l')`
    margin-right: ${theme('spaces.s')};
    min-height: ${theme('icons.size.l')};
    min-width: ${theme('icons.size.l')};
  `}

  ${ifThen(homepage, css`
    .qs-header-cnx {
      fill: ${theme('colors.white')};
    }

    p {
      color: ${theme('colors.white')};

      &::after {
        border-top-color: ${theme('colors.white')};
      }
    }
  `)} 

  ${ifThen(!homepage || !atTop, css`
    .qs-header-cnx {
      fill: ${theme('colors.black')};
    }

    p {
      color: ${theme('colors.black')};

      &::after {
        border-top-color: ${theme('colors.black')};
      }
    }
  `)}

  &:hover {
    .qs-header-cnx {
      fill: ${theme('colors.secondary')};
    }

    p {
      color: ${theme('colors.secondary')};

      &::after {
        border-top-color: ${theme('colors.secondary')};
      }
    }
  }
`}`

const SignLabel = styled.p`
  display: inline-block;
  margin: 0 0 0 ${theme('spaces.m')};
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

const LogInLabel = styled.p`
  position: relative;
  display: inline-block;
  margin: 0 0 0 ${theme('spaces.s')};
  padding-right: ${theme('spaces.m')};
  min-height: ${theme('spaces.m')};
  overflow: hidden;
  font-family: ${theme('fonts.family.andesBlack')};
  font-size: ${theme('fonts.size.base')};
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.3s ease;

  &::after {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.25rem;
    width: 0; 
    height: 0; 
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid ${theme('colors.black')};
    content: '';
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${theme('colors.secondary')};
  }

  ${breakpoint('xl')`
    font-size: ${theme('fonts.size.l')};
  `}
`

const AccountButton = ({ atTop, authenticated, toggleAccountNavigation, toggleSignInPopin, homepage, firstName }) => (
  <Wrapper homepage={homepage} atTop={atTop} onClick={authenticated ? toggleAccountNavigation : toggleSignInPopin}>
    <Icon
      size={32}
      icon="login"
    />
    {authenticated ? <LogInLabel>{firstName}</LogInLabel> : <SignLabel><FormattedMessage id="login" /></SignLabel>}
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
