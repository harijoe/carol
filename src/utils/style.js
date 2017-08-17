import get from 'lodash/get'
import { injectGlobal, css } from 'styled-components'
import reduce from 'lodash/reduce'

/*
  Helper to be used in components to avoid the verbosity of `props => props.theme.property`
  Throws if key is not found
 */
export const theme = (key, extension = '') => props => {
  const result = get(props.theme, key)

  if (typeof result === 'undefined') {
    throw new Error(`Style Error — key: "${key}" is not defined in the theme`)
  }

  if (typeof result === 'object') {
    return result
  }

  return result + extension
}

/*
  Same as theme, removing units
 */
export const raw = key => props => get(props.theme, key).replace(/\s*(em|px|%|rem|vw|vh|pt)$/, '')

/*
  Merges multiple template literals
 */
export const merge = (...templates) => [].concat(...templates)

/*
  Injects multiple globals files
 */
export const injectGlobals = globalArrays => globalArrays.map(e => injectGlobal([e]))

/*
 Renders a media query for a given breakpoint and runs the template literal from this breakpoint
 Use the invert bool to set max-width instead of min-width
 Input: (breakpointKey, invert), templateLiteral
 Out: templateLiteral
 */
export const breakpoint = (bp, invert = false) => (...argsMain) => {
  // Builds a media query for a given breakpoint width
  const media = breakpointWidth => {
    const query = ` and (${invert ? 'max' : 'min'}-width: ${invert ? breakpointWidth - 1 : breakpointWidth}px)`
    const mediaString = `only screen ${breakpointWidth === 0 ? '' : query}`

    return (...args) => css`
      @media ${mediaString} {
        ${css(...args)}
      }
    `
  }

  // Safely extracts breakpoint width from config
  const getBreakpointWidth = breakpointKey => props => {
    const result = get(props, `theme.grid.breakpoints.${breakpointKey}`)

    if (typeof result === 'undefined') {
      throw new Error(`Style Error — breakpoint: "${breakpointKey}" is not defined in the theme`)
    }

    return result
  }

  return css`
    ${p => media(getBreakpointWidth(bp)(p))(...argsMain)}
  `
}

/*
  Alias of breakpoint with invert option to true
 */
export const breakpointMax = bp => breakpoint(bp, true)

/*
  Renders a media query for each breakpoint by calling a callback on each of them.
  Equivalent to a map on breakpoints
  Input: Callback to call on each breakpoint (key, value)
 */
export const mapBreakpoints = callback => props => {
  const breakpoints = get(props, 'theme.grid.breakpoints')

  const res = reduce(
    breakpoints,
    (result, value, key) =>
      merge(
        result,
        breakpoint(key)(
          ...css`
    ${''
    /*
        This is necessary due to a very nasty bug. If you remove it, the first line rendered by callback will
        be ignored for some reason. Either understand what's going on and fix it, or let it be along with this comment
      */
          }
    ${callback(key, value)}
  `,
        ),
      ),
    [],
  )

  return res
}

/*
  Helper to write conditions in css with elegance
 */
export const ifThen = (condition, thenAssertion, elseAssertion = []) => {
  if (condition) {
    return thenAssertion
  }

  return elseAssertion
}

/*
  Generate proptypes, excluding attributes that can't be passed to a dom element
 */
export const generatePropTypes = (props, propTypes) => {
  const newProps = {}

  Object.keys(props)
    .filter(key => key === 'children' || (propTypes[key] == null && (props.theme == null || props.theme.grid.breakpoints[key] == null)))
    .forEach(key => (newProps[key] = props[key]))

  return newProps
}
