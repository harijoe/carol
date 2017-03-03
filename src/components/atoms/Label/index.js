import { PropTypes } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.grayscale[1]};
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
  reverse: PropTypes.bool,
}

export default Label
