import styled from 'styled-components'

const Paragraph = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.grayscale[0]};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`

export default Paragraph
