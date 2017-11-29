import styled from 'styled-components'
import Grid from 'components/Grid'

const ResultsGrid = styled(Grid)`
  max-width: 86rem;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    max-width: 88rem;
  }
`

export default ResultsGrid
