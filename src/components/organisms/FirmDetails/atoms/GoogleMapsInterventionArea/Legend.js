import styled from 'styled-components'
import { breakpointMax } from 'utils/style'

export default styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  bottom: 2.5rem;
  width: 20rem;
  background: white;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 0 2em;
  
  ${breakpointMax('s')`
    height: 4rem;
    width: auto;
    padding: 0 1rem;
    font-size: 1.2rem;
    text-align: auto;
  `};
`
