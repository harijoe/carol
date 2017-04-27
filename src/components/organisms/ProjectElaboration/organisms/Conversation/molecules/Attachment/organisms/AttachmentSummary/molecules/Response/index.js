import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Paragraph } from 'components'

const StyledParagraph = styled(Paragraph)`
  margin-top: 10px;
  margin-bottom: 30px;
`

const Question = ({ children }) => (
  <StyledParagraph>
    {children}
  </StyledParagraph>
)

Question.propTypes = {
  children: PropTypes.any,
}

export default Question
