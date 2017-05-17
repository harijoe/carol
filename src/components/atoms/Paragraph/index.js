import styled from 'styled-components'
import { theme } from 'utils/style'

const Paragraph = styled.p`
  font: normal ${theme('fonts.size.base')}/1.3 ${theme('fonts.family.montserratLight')}, sans-serif;
  color: inherit;
  letter-spacing: 0.3px;
  margin: ${theme('spaces.m')} 0 0 0;
`

export default Paragraph
