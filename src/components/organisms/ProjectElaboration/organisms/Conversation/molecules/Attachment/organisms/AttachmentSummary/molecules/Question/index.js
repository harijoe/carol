import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Paragraph } from 'components'

const StyledParagraph = styled(Paragraph)`
  font-weight: bold;
`

const Response = ({ children }) => (
  <StyledParagraph>
    {children}
  </StyledParagraph>
)

Response.propTypes = {
  children: PropTypes.any,
}


export default Response
