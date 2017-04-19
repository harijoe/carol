import styled from 'styled-components'
import { theme } from 'utils/style'

const Block = styled.div`
  background-color: #fff;
  color: ${theme('colors.grayscale.darkest')};
`

Block.defaultProps = {
  color: 'grayscale',
}

export default Block
