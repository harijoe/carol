import styled from 'styled-components'

const Block = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  background-color: #fff;
  color: ${props => props.theme.colors.grayscale[0]};
`

Block.defaultProps = {
  color: 'grayscale',
}

export default Block
