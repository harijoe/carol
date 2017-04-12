import styled from 'styled-components'
import { theme } from 'utils/style'

const Paragraph = styled.p`
  font: normal ${theme('fonts.size.base')} montserrat-light, sans-serif !important;
  color: inherit;
  line-height: 1.3;
  margin: ${theme('spaces.m')} 0 0 0;
`

export default Paragraph
