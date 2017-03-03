import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'

const fontSize = ({ height }) => `${height / 40}rem`

const styles = css`
  ${props => props.disabled ? 'opacity: .6;' : ''}
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-flex;
  font-family: ${props => props.theme.fonts.primary};
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  border: 0.0625em solid #000;
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: auto;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: #276BC4;
  color: #000;

  &:hover, &:focus, &:active {
    background-color: #2878E1;
    color: #000;
  }

  &:focus {
    outline: none
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
  color: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  height: 40,
}

export default Button
