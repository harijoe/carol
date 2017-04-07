import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, breakpoint, ifThen, mapBreakpoints } from 'utils/style'

const styles = ({ fluid, narrow }) => css`
  position: relative;

  ${ifThen(fluid, mapBreakpoints(current => css`
    margin-left: calc(${theme(`grid.gutterWidth.${current}`, 'rem')} * -1);
    margin-right: calc(${theme(`grid.gutterWidth.${current}`, 'rem')} * -1);
    padding-left: ${theme(`grid.gutterWidth.${current}`, 'rem')};
    padding-right: ${theme(`grid.gutterWidth.${current}`, 'rem')};
  `))}
  ${ifThen(narrow, breakpoint('l')`
    max-width: 80rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  `)}
`

const Grid = styled(props =>
  React.createElement(props.tagName || 'div', props)
)`${styles}`

Grid.displayName = 'Grid'

Grid.PropTypes = {
  fluid: PropTypes.bool,
  narrow: PropTypes.bool,
  tagName: PropTypes.string,
  children: PropTypes.node,
}

export default Grid
