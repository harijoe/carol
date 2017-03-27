import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, breakpoint, ifThen, mapBreakpoints } from 'utils/style'

const styles = ({ fluid, narrow }) => css`
  ${ifThen(fluid, mapBreakpoints(current => css`
    margin-left: ${theme(`grid.padding.${current}`, 'rem')};
    margin-right: ${theme(`grid.padding.${current}`, 'rem')};
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
