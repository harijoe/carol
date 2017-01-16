import { PropTypes } from 'react'
import styled from 'styled-components'
import { fonts, colors } from 'components/globals'

const Label = styled.label`
  font-family: ${fonts.primary};
  color: ${colors.grayscale[1]};
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
  reverse: PropTypes.bool,
}

export default Label
