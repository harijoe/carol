import React from 'react'
import PropTypes from 'prop-types'
import { theme, ifThen, breakpoint } from 'utils/style'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`${({ block, secondary, maxWidth, center, cssDisabled, loading }) => css`
  cursor: pointer;
  display: block;
  margin: ${theme('spaces.m')} 0 0 0;
  padding: ${theme('spaces.m')};
  width: 100%;
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.base')};
  letter-spacing: 0.05rem;
  text-align: center;
  background-color: ${ifThen(cssDisabled, css`${theme('colors.grayscale.light')}`, css`${theme('colors.secondary')}`)};
  border: 0;
  color: ${theme('colors.black')};
  outline: 0;
  ${breakpoint('m')`
    padding: ${theme('spaces.m')};
    margin-bottom: ${theme('spaces.l')};
    margin-top: ${theme('spaces.l')};
    max-width: 32rem;
  `}
  ${ifThen(block, 'width: 100%')};
  ${ifThen(loading, css`
    content: 'loading';
    background-color: ${theme('colors.grayscale.light')};
  `)};
  ${ifThen(secondary, css`
    background-color: ${theme('colors.grayscale.lighter')};
    color: ${theme('colors.grayscale.dark')};
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

const Button = ({ type, children, loading, disabled, ...props }) => {
  const actualChildren = loading ? <div>Loading</div> : children
  const actualDisabled = loading || disabled

  return <StyledButton {...{ ...props, cssDisabled: disabled, children: actualChildren, disabled: actualDisabled }} type={type} />
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
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  loading: false,
}

export default Button
