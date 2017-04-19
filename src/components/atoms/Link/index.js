import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'
import { theme, ifThen, breakpoint } from 'utils/style'

const styles = ({ kind, highlight, button }) => css`
  text-decoration: none;
  color: ${theme(`colors.${kind}`)};

  &:hover {
    text-decoration: none;
  }

  ${ifThen(highlight, css`
    position: relative;
    z-index: 0;
    padding-left: ${theme('spaces.xs')};
    padding-right: ${theme('spaces.xs')};
    color: inherit;
    transition: color 0.3s 0.1s ease;

    &::before {
      position: absolute;
      bottom: -${theme('spaces.xs')};
      left: 0;
      z-index: -1;
      height: calc(50% + ${theme('spaces.xs')});
      width: 100%;
      background-color: ${theme('colors.primary')};
      content: '';
      opacity: 0.2;
      transition: all 0.3s ease;
    }

    &:hover {
      color: ${theme('colors.white')};

      &::before {
        height: calc(100% + ${theme('spaces.s')});
        opacity: 1;
      }
    }
  `)};

  ${ifThen(button, css`
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
      max-width: 32rem;
    `}
  `)};
`

const StyledLink = styled(RouterLink)`${styles}`
const Anchor = styled.a`${styles}`

const Link = ({ ...props, to }) => {
  // Checks if URL is absolute
  if (to == null || to.indexOf('http://') === 0 || to.indexOf('https://') === 0) {
    return <Anchor {...props} href={to || ''} />
  }

  return <StyledLink {...props} />
}

Link.propTypes = {
  kind: PropTypes.string,
  light: PropTypes.bool,
  to: PropTypes.string,
  highlight: PropTypes.bool,
  button: PropTypes.bool,
}

Link.defaultProps = {
  kind: 'secondary',
}

export default Link
