import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { theme } from 'utils/style'

const styles = css`
  ${props => props.disabled ? 'opacity: .6;' : ''}
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: block;
  background-color: ${theme('colors.primary')};
  color: ${theme('colors.grayscale.darkest')};

  @media (min-width: ${theme('breakpoints.sm')}) {
    background-color: ${theme('colors.secondary')};
  }
`

const StyledLink = styled(({ ...props }) => <Link {...props} />)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props, to, href }) => {
  if (to) {
    return <StyledLink {...props} />
  }

  if (href) {
    return <Anchor {...props} />
  }

  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
