import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'
import { theme, ifThen, breakpoint } from 'utils/style'

const styles = ({ kind, highlight, button }) => css`
  text-decoration: none;
  color: ${theme(`colors.${kind}`)};
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  ${ifThen(highlight, css`
    position: relative;
    padding-left: ${theme('spaces.xs')};
    padding-right: ${theme('spaces.xs')};
    box-shadow: inset 0 -0.6rem 0 rgba(51, 51, 254, 0.2);
    color: inherit;
    transition: all 0.3s ease;

    &:hover {
      color: ${theme('colors.white')};
      box-shadow: inset 0 -6rem 0 rgba(51, 51, 254, 1);
    }
  `)};

  ${ifThen(button, css`
    display: block;
    margin: ${theme('spaces.m')} 0 0 0;
    padding: ${theme('spaces.m')};
    min-width: 20rem;
    font-family: ${theme('fonts.family.montserratBold')};
    font-size: ${theme('fonts.size.base')};
    letter-spacing: 0.05rem;
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
  if (to == null) {
    return <Anchor {...props} />
  }

  // Checks if URL is absolute
  if (to.indexOf('http') === 0) {
    return <Anchor {...props} href={to || ''} />
  }

  /*
    Chrome rendering adds a '/' automatically before href value
    It is messing with the ssr as node rendering does not do it
   */
  const normalizedTo = to.indexOf('/') !== 0 ? `/${to}` : to

  return <StyledLink {... { ...props, to: normalizedTo }} />
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
