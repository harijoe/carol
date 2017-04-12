import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

const MainWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  ${breakpoint('xl')`
    max-width: ${theme('grid.container')}rem;
  `}
`
// @TODO: test is missing

export default MainWrapper
