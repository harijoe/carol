import get from 'lodash/get'
import { injectGlobal, css } from 'styled-components'

/*
  Helper to be used in components to avoid the verbosity of `props => props.theme.property`
 */
export const theme = key => props => get(props.theme, key)

/*
  Merges multiple template literals
 */
// eslint-disable-next-line no-param-reassign
export const merge = (base, ...templates) => css`${base} ${templates.join(' ')}`

/*
  Injects multiple globals files
 */
export const injectGlobals = globalArrays => globalArrays.map(e => injectGlobal([e]))
