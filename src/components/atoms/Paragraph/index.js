import styled from 'styled-components'
import { theme } from 'utils/style'

const Paragraph = styled.p`
  color: inherit;
  font-size: ${theme('fonts.size.base')};
  line-height: 1.3;
  margin: ${theme('spaces.m')} 0 0 0;
`

export default Paragraph
