import styled from 'styled-components'

import { fonts, colors } from 'components/globals'

const Block = styled.div`
  font-family: ${fonts.primary};
  background-color: #FFF;
  color: ${colors.grayscale[0]};
`

Block.defaultProps = {
  color: 'grayscale',
}

export default Block
