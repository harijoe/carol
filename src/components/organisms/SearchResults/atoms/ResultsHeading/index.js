import styled from 'styled-components'
import { Heading } from 'components'
import { theme, breakpoint } from 'utils/style'

const ResultsHeading = styled(Heading)`
  font-family: ${theme('fonts.family.montserrat')};
  font-weight: bold;

  ${breakpoint('l')`
    padding-left: calc(${theme('spaces.l')} / 2);
    padding-right: calc(${theme('spaces.l')} / 2);
  `}
`

export default ResultsHeading
