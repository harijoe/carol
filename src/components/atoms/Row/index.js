import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { theme, breakpoint, ifThen, mapBreakpoints } from 'utils/style'

const styles = ({ reverse, start, center, end, top, middle, bottom, around, between, first, last }) => css`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  ${mapBreakpoints(bp => css`
    padding-right: calc(${theme(`grid.padding.${bp}`, 'rem')} / 2);
    padding-left: calc(${theme(`grid.padding.${bp}`, 'rem')} / 2);
  `)}
  ${ifThen(reverse, 'flex-direction: row-reverse;')}
  ${ifThen(start, breakpoint(start)`
    justify-content: flex-start;
    text-align: start;
  `)}
  ${ifThen(center, breakpoint(center)`
    justify-content: center;
    text-align: center;
  `)}
  ${ifThen(end, breakpoint(end)`
    justify-content: flex-end;
    text-align: end;
  `)}
  ${ifThen(top, breakpoint(top)`
    align-items: flex-start;
  `)}
  ${ifThen(middle, breakpoint(middle)`
    align-items: center;
  `)}
  ${ifThen(bottom, breakpoint(bottom)`
    align-items: flex-end;
  `)}
  ${ifThen(around, breakpoint(around)`
    justify-content: space-around;
  `)}
  ${ifThen(between, breakpoint(between)`
    justify-content: space-between;
  `)}
  ${ifThen(first, breakpoint(first)`
    order: -1;
  `)}
  ${ifThen(last, breakpoint(last)`
    order: 1;
  `)}
`

const Row = styled(props =>
  React.createElement(props.tagName || 'div', props)
)`${styles}`

Row.displayName = 'Row'

Row.PropTypes = {
  reverse: PropTypes.bool,
  start: PropTypes.string,
  center: PropTypes.string,
  end: PropTypes.string,
  top: PropTypes.string,
  middle: PropTypes.string,
  bottom: PropTypes.string,
  around: PropTypes.string,
  between: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node,
}

export default Row
