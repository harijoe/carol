import styled from 'styled-components'
import { breakpointMax } from 'utils/style'

export default styled.h4`
  ${breakpointMax('s')`
    font-size: 1.2rem;
    margin: 1rem 0;
    text-align: center;
  `};
`

