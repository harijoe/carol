import styled from 'styled-components'
import { theme } from 'utils/style'

const Paragraph = styled.p`
  font: normal ${theme('fonts.size.base')} ${theme('fonts.family.montserratLight')} !important;
  color: ${theme('colors.grayscale.dark')} !important;
  line-height: 1.3;
  letter-spacing: 0.3px;
  margin: ${theme('spaces.m')} 0 0 0;
`

export default Paragraph
