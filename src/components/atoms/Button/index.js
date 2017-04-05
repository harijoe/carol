import React, { PropTypes } from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
  display: block;
  border: 0;
  outline: 0;
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
