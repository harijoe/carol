import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

const Bubble = styled.div`
  position: relative;
  padding: ${theme('spaces.m')};
  background: ${theme('colors.white')};
  border-radius: 0.5rem;

  &::before {
    position: absolute;
    top: -${theme('spaces.m')};
    margin-left: ${theme('spaces.xxxl')};
    width: 0;
    height: 0;
    border-bottom: ${theme('spaces.m')} solid ${theme('colors.white')};
    border-right: ${theme('spaces.m')} solid transparent;
    content: '';
    ${breakpoint('m')`margin-left: calc(${theme('spaces.xxl')}*3);`}
  }

  ${breakpoint('m')`
    margin-bottom: 10rem;
  `}
`

export default Bubble
