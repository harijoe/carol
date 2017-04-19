import React, { PropTypes } from 'react'
import { theme, ifThen, breakpoint } from 'utils/style'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`${({ block, secondary, maxWidth, center }) => css`
  display: block;
  margin: ${theme('spaces.m')} 0 0 0;
  padding: ${theme('spaces.m')};
  min-width: 20rem;
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.base')};
  letter-spacing: .05rem;
  text-align: center;
  background-color: ${theme('colors.secondary')};
  border: 0;
  color: ${theme('colors.black')};
  outline: 0;

  ${breakpoint('m')`
    padding: ${theme('spaces.l')};
    margin-bottom: ${theme('spaces.l')};
    margin-top: ${theme('spaces.l')};
  `}

  ${ifThen(block, 'width: 100%')};
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

const Button = ({ type, ...props }) => <StyledButton {...props} type={type} />

Button.propTypes = {
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  secondary: PropTypes.bool,
  maxWidth: PropTypes.bool,
  center: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
