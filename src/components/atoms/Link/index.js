import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'
import { theme } from 'utils/style'

const styles = ({ kind }) => css`
  text-decoration: none;
  font-weight: 500;
  color: ${theme(`branding.${kind}`)};

  &:hover {
    text-decoration: underline;
  }
`

const StyledLink = styled(RouterLink)`${styles}`
const Anchor = styled.a`${styles}`

const Link = ({ ...props, to }) => {
  if (to) {
    return <StyledLink {...props} />
  }

  return <Anchor {...props} />
}

Link.propTypes = {
  kind: PropTypes.string,
  light: PropTypes.bool,
  to: PropTypes.string,
}

Link.defaultProps = {
  kind: 'primary',
}

export default Link
