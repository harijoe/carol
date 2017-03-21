import styled from 'styled-components'
import { theme } from 'utils/style'

const Bubble = styled.div`
  position: relative;
  padding: ${theme('spaces.m')};
  background: ${theme('colors.white')};
  border-radius: .5rem;

  &::before{
    position: absolute;
    top: -${theme('spaces.m')};
    left: 33.33%;
    width: 0; 
    height: 0; 
    border-bottom: ${theme('spaces.m')} solid ${theme('colors.white')};
    border-right: ${theme('spaces.m')} solid transparent;
    content: '';
  }
`

export default Bubble
