import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'components'
import styled, { css } from 'styled-components'

import { theme, ifThen, breakpoint } from 'utils/style'

const StyledButton = styled.button`${({ block, secondary, maxWidth, center, cssDisabled, loading, highlight }) => css`
  cursor: pointer;
  display: block;
  margin: ${theme('spaces.m')} 0 0 0;
  padding: ${ifThen(loading, css`${theme('spaces.xs')}`, css`${theme('spaces.m')}`)};
  width: 100%;
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.base')};
  letter-spacing: 0.05rem;
  text-align: center;
  background-color: ${ifThen(loading,
    css`${theme('colors.white')}`,
    css`${ifThen(cssDisabled, css`${theme('colors.grayscale.light')}`, css`${theme('colors.secondary')}`)}`
  )};
  border: ${ifThen(loading, css`1px solid ${theme('colors.secondary')}`, 0)};
  color: ${theme('colors.black')};
  outline: 0;
  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.l')};
    margin-top: ${theme('spaces.l')};
  `}
  ${ifThen(block, 'width: 100%')};
  ${ifThen(secondary, css`
    background-color: ${theme('colors.grayscale.lighter')};
    color: ${theme('colors.grayscale.dark')};
  `)};
  ${ifThen(highlight, css`
    position: relative;
    margin: 0;
    padding: 0 4px 0 4px;
    width: auto;
    text-decoration: none;
    font-family: ${theme('fonts.family.montserratLight')};
    font-size: ${theme('fonts.size.base')};
    letter-spacing: 0rem;
    line-height: 1;
    background-color: transparent;
    color: ${theme('colors.black')};
    padding-left: ${theme('spaces.xs')};
    padding-right: ${theme('spaces.xs')};
    box-shadow: inset 0 -0.6rem 0 rgba(51, 51, 254, 0.2);
    transition: all 0.3s ease;

    &:hover {
      color: ${theme('colors.white')};
      box-shadow: inset 0 -6rem 0 rgba(51, 51, 254, 1);
    }

    ${breakpoint('m')`
      margin: 0;
      padding: 0 4px 0 4px;
    `}
  `)};
  ${ifThen(maxWidth, css`
    ${breakpoint('m')`
      max-width: 32rem;
    `}
  `)};
  ${ifThen(center, css`
    margin-left: auto;
    margin-right: auto;
  `)};
`}`

const Button = ({ type, children, loading, disabled, highlight, ...props }) => {
  const loadingButton = <Icon icon="spinner" size={55} />
  const actualChildren = loading && !highlight ? loadingButton : children
  const actualDisabled = loading || disabled

  return <StyledButton {...{ ...props, highlight, loading, cssDisabled: disabled, children: actualChildren, disabled: actualDisabled }} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  secondary: PropTypes.bool,
  maxWidth: PropTypes.bool,
  children: PropTypes.any,
  center: PropTypes.bool,
  type: PropTypes.string,
  loading: PropTypes.bool,
  highlight: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  loading: false,
}

export default Button
