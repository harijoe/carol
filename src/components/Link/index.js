import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import omit from 'lodash/omit'
import { theme, ifThen, breakpoint } from 'utils/style'

const styleProps = ['highlight', 'kind', 'button', 'large', 'theme']

const styles = ({ kind, highlight, button, large }) => css`
  text-decoration: none;
  color: ${theme(`colors.${kind}`)};
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  ${ifThen(
    highlight,
    css`
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
  `,
  )};

  ${ifThen(
    button,
    css`
    display: block;
    margin: ${theme('spaces.m')} 0 0 0;
    padding: ${theme('spaces.m')};
    min-width: 20rem;
    width: 100%;
    font-weight: bold;
    font-size: ${theme('fonts.size.base')};
    letter-spacing: 0.05rem;
    text-align: center;
    background-color: ${theme('colors.secondary')};
    border: 0;
    color: ${theme('colors.black')};
    outline: 0;
    ${breakpoint('m')`
      margin-bottom: ${theme('spaces.l')};
      margin-top: ${theme('spaces.l')};
      max-width: 32rem;
    `}

    ${ifThen(
      large,
      css`
        ${breakpoint('m')`
          padding: ${theme('spaces.l')};
        `}
      `,
    )}
  `,
  )};
`

const removeStyledProps = Component => props => <Component {...omit(props, ...styleProps)} />

export const StyledLink = styled(removeStyledProps(RouterLink))`${styles}`
export const NoAnchor = styled.span`${styles};`
export const Anchor = styled.a`${styles};`

const Link = ({ to, forceRedirect, ...props }) => {
  if (!to) {
    return <NoAnchor {...props} role="link" />
  }

  // Checks if URL is absolute
  if (to.match(/^(https?|mailto|tel):/) || forceRedirect) {
    return <Anchor {...props} href={to || ''} />
  }

  /*
    Chrome rendering adds a '/' automatically before href value
    It is messing with the ssr as node rendering does not do it
   */
  const normalizedTo = to.indexOf('/') !== 0 ? `/${to}` : to

  return <StyledLink {...{ ...props, to: normalizedTo }} />
}

Link.propTypes = {
  kind: PropTypes.string,
  light: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  highlight: PropTypes.bool,
  button: PropTypes.bool,
  large: PropTypes.bool,
  forceRedirect: PropTypes.bool,
}

Link.defaultProps = {
  kind: 'secondary',
}

export default Link
