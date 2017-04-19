import React, { PropTypes } from 'react'
import { theme, ifThen } from 'utils/style'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`${({ block }) => css`
  display: block;
  ${ifThen(block, 'width: 100%')};
  border: 0;
  outline: 0;
  background-color: ${theme('colors.secondary')};
  padding: 15px;
`}`

const Button = ({ type, ...props }) => <StyledButton {...props} type={type} />

Button.propTypes = {
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
