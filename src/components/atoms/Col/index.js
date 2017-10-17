import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { theme, breakpoint, ifThen, mapBreakpoints, generatePropTypes } from 'utils/style'


const breakpointKeys = props => {
  const breakpoints = Object.keys(theme('grid.breakpoints')(props))
  return Object.keys(props).filter(key => breakpoints.includes(key)).sort((a, b) => breakpoints.indexOf(a) - breakpoints.indexOf(b))
}

const gridFunction = props => breakpointKeys(props).map(k =>
  breakpoint(k)`${ifThen(
    Number.isInteger(props[k]),
    `
      flex-basis: calc(100% * ${props[k]} / ${theme('grid.gridSize')(props)});
      max-width: calc(100% * ${props[k]} / ${theme('grid.gridSize')(props)});
      display: block;
    `,
    ifThen(
      props[k],
      `
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
        display: block;
       `,
      'display: none;',
    ),
  )}`,
)


const styles = props => css`
  box-sizing: border-box;
  flex: 0 0 auto;
  ${mapBreakpoints(
    bp => css`
    padding-right: calc(${theme(`grid.gutterGrid.${bp}`, 'rem')} / 2);
    padding-left: calc(${theme(`grid.gutterGrid.${bp}`, 'rem')} / 2);
  `,
  )}
  ${ifThen(props.reverse, css`flex-direction: column-reverse;`)}
  ${gridFunction}
`

const Col = styled(props => React.createElement(props.tagName || 'div', generatePropTypes(props, Col.PropTypes)))`${styles}`

Col.displayName = 'Col'

Col.PropTypes = {
  theme: PropTypes.object,
  reverse: PropTypes.bool,
  tagName: PropTypes.string,
  children: PropTypes.node,
}

export default withTheme(Col)
