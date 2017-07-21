import styled from 'styled-components'
import { theme } from 'utils/style'

const Paragraph = styled.p`
  line-height: 1.3;
  color: inherit;
  letter-spacing: 0.3px;
  margin: ${theme('spaces.m')} 0 0 0;

  &:first-child {
    margin-top: 0;
  }
`

export default Paragraph
