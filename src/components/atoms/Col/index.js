import React, { PropTypes } from 'react'
import styled, { css, withTheme } from 'styled-components'
import { theme, breakpoint, ifThen, mapBreakpoints, generatePropTypes } from 'utils/style'

const styles = props => css`
  box-sizing: border-box;
  flex: 0 0 auto;
  ${mapBreakpoints(bp => css`
    padding-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
    padding-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
  `)}
  ${ifThen(props.reverse, css`flex-direction: column-reverse;`)}
  ${(p) => {
    const breakpoints = Object.keys(theme('grid.breakpoints')(p))

    return Object.keys(p)
      .filter(k => breakpoints.includes(k))
      .sort((a, b) => breakpoints.indexOf(a) - breakpoints.indexOf(b))
      .map(k => breakpoint(k)`${
        ifThen(Number.isInteger(p[k]), `
          flex-basis: calc(100% * ${p[k]} / ${theme('grid.gridSize')(p)});
          max-width: calc(100% * ${p[k]} / ${theme('grid.gridSize')(p)});
          display: block;
        `,
          ifThen(p[k], `
            flex-grow: 1;
            flex-basis: 0;
            max-width: 100%;
            display: block;
           `,
            'display: none;'
          )
        )}`)
  }}
`

const Col = styled(props =>
  React.createElement(props.tagName || 'div', generatePropTypes(props, Col.PropTypes))
)`${styles}`

Col.displayName = 'Col'

Col.PropTypes = {
  theme: PropTypes.object,
  reverse: PropTypes.bool,
  tagName: PropTypes.string,
  children: PropTypes.node,
}

export default withTheme(Col)
