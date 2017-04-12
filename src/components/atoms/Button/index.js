import React, { PropTypes } from 'react'
import { theme } from 'utils/style'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: block;
  width: 100%;
  border: 0;
  outline: 0;
  background-color: ${theme('colors.secondary')};
  padding: 15px;
`

const Button = ({ type, ...props }) => <StyledButton {...props} type={type} />

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
