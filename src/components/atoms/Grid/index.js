import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint, ifThen, mapBreakpoints } from 'utils/style'

const styles = ({ fluid, narrow }) => css`
  position: relative;
  ${ifThen(fluid, mapBreakpoints(current => css`
    margin-left: calc(${theme(`grid.gutterGrid.${current}`, 'rem')} * -1);
    margin-right: calc(${theme(`grid.gutterGrid.${current}`, 'rem')} * -1);
    padding-left: ${theme(`grid.gutterGrid.${current}`, 'rem')};
    padding-right: ${theme(`grid.gutterGrid.${current}`, 'rem')};
  `))}
  ${ifThen(narrow, breakpoint('l')`
    max-width: 80rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  `)}
`

const Grid = styled.div`${styles}`

Grid.displayName = 'Grid'

Grid.PropTypes = {
  fluid: PropTypes.bool,
  narrow: PropTypes.bool,
  children: PropTypes.node,
}

export default Grid
