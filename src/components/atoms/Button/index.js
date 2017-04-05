import React, { PropTypes } from 'react'

import styled, { css } from 'styled-components'

const styles = css`
  display: block;
  border: 0;
  outline: 0;
`

const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props }) => <StyledButton {...props} type={type} />

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
