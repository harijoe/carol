import styled from 'styled-components'
import { breakpointMax } from 'utils/style'

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 75px;
  
  ${breakpointMax('s')`
    right: 0;
  `};
`

