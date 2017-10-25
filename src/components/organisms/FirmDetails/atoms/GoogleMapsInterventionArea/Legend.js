import styled from 'styled-components'
import { breakpointMax } from 'utils/style'

export default styled.div`
  position: absolute;
  top: 1.6rem;
  right: 0;
  bottom: 2.4rem;
  width: 20rem;
  background: white;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 0 2em;
  
  ${breakpointMax('s')`
    right: 1.6rem;
    bottom: auto;
    left: 1.6rem;
    height: calc(100% - 3.2rem);
    top: calc(100% - 3.2rem);
    width: calc(100% - 3.2rem);
  `};
`
