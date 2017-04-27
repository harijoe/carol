import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'
import { theme } from 'utils/style'

const styles = ({ kind }) => css`
  text-decoration: none;
  color: ${theme(`colors.${kind}`)};

  &:hover {
    text-decoration: none;
  }
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
}

Link.defaultProps = {
  kind: 'secondary',
}

export default Link
