import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Paragraph } from 'components'

const StyledParagraph = styled(Paragraph)`
  margin-top: ${theme('spaces.xl')};
  font-weight: bold;
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
