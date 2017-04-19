import { PropTypes } from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

const Label = styled.label`
  color: ${theme('colors.grayscale.darker')};
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
  reverse: PropTypes.bool,
}

export default Label
