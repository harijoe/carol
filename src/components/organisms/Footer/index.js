import React from 'react'
import styled from 'styled-components'

import { colors } from 'components/globals'
import { Paragraph, Link, Icon } from 'components'

const Credits = styled(Paragraph)`
  text-align: center;
  margin: 0;
`

const StyledFooter = styled.div`
  background-color: ${([...colors.grayscale].reverse()[1])};
  padding: 2rem;
`

const Footer = props => (
  <StyledFooter {...props}>
    <Credits>
      Made with <Icon icon="heart" /> by <Link href="https://www.quotatis.fr">Quotatis</Link>
    </Credits>
  </StyledFooter>
)

export default Footer
