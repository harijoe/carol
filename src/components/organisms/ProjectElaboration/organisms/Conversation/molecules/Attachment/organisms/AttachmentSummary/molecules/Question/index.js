import React from 'react'
import PropTypes from 'prop-types'
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
