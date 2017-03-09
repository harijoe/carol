import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, merge } from 'utils/style'

const styles = ({ level }) => {
  let baseStyle

  switch (level) {
    case 1:
      baseStyle = css`
        color: ${theme('colors.black')};
        size: ${theme('fonts.size.xxl')};
      `
      break
    case 2:
      baseStyle = css`
        color: ${theme('colors.black')};
        font-size: ${theme('fonts.size.xl')};
      `
      break
    case 3:
      baseStyle = css`
        color: ${theme('colors.black')};
        font-size: ${theme('fonts.size.l')};
      `
      break
    case 4:
      baseStyle = css`
        color: ${theme('colors.black')};
        font-size: ${theme('fonts.size.m')};
      `
      break
    default:
      baseStyle = css`
        color: ${theme('colors.grayscale.darker')};
        font-size: ${theme('fonts.size.s')};
      `
      break
  }

  const extraStyle = css`
    line-height: 1;
    font-family: 'andes-black', sans-serif;
  `

  return merge(baseStyle, extraStyle)
}

const Heading = styled(({ level, children, ...props }) => React.createElement(`h${level}`, props, children))`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any,
}

Heading.defaultProps = {
  level: 1,
}

export default Heading
