import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { colors, reverseColors, fonts } from 'components/globals'

const styles = ({ kind, light, level }) => {
  const index = 'grayscale' === kind ? 0 : 1
  const color = light ? reverseColors[kind][index] : colors[kind][index]

  return css`
    font-family: ${fonts.primary};
    font-weight: 700;
    font-size: ${1 + 1.625 * (1 / level)}rem;
    margin: 0;
    margin-top: ${1 + 0.5 * (1 / level)}rem;
    margin-bottom: ${0.5 + 0.5 * (1 / level)}rem;
    color: ${color};
  `
}

const Heading = styled(({ level, children, light, ...props }) => {
  return React.createElement(`h${level}`, props, children)
})`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any,
  kind: PropTypes.oneOf(Object.keys(colors)),
  light: PropTypes.bool,
}

Heading.defaultProps = {
  level: 1,
  kind: 'grayscale',
}

export default Heading