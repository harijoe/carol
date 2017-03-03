import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const styles = ({ kind, light, level, theme }) => {
  const index = kind === 'grayscale' ? 0 : 1
  const color = light ? theme.reverseColors[kind][index] : theme.colors[kind][index]

  return css`
    font-family: ${theme.fonts.primary};
    font-weight: 500;
    font-size: ${0.75 + (1 / level)}rem;
    margin: 0;
    margin-top: ${1 + (0.5 * (1 / level))}rem;
    margin-bottom: ${0.5 + (0.5 * (1 / level))}rem;
    color: ${color};
  `
}

const Heading = styled(({ level, children, ...props }) => React.createElement(`h${level}`, props, children))`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any,
  kind: PropTypes.string,
  light: PropTypes.bool,
}

Heading.defaultProps = {
  level: 1,
  kind: 'grayscale',
}

export default Heading
