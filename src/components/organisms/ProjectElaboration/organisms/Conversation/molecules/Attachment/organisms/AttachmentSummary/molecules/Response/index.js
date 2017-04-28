import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Paragraph } from 'components'

const StyledParagraph = styled(Paragraph)`
  margin: ${theme('spaces.m')} 0;
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
