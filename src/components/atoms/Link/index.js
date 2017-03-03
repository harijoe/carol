import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'

const styles = ({ light, kind, theme }) => {
  const color = light ? theme.reverseColors[kind][1] : theme.colors[kind][1]

  return css`
    font-family: ${theme.fonts.primary};
    text-decoration: none;
    font-weight: 500;
    color: ${color};

    &:hover {
      text-decoration: underline;
    }
  `
}

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
