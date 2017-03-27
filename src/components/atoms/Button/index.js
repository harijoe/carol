import React, { PropTypes } from 'react'

const Button = ({ type, ...props }) => <button {...props} type={type} />

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
