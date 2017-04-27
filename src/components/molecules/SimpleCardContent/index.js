import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'utils/style'
import styled from 'styled-components'

import { Heading, Paragraph } from 'components'

const Wrapper = styled.div`
  padding: ${theme('spaces.m')};
`

const StyledParagraph = styled(Paragraph)`
  font: normal ${theme('fonts.size.base')} montserrat-light, sans-serif !important;
  line-height: 1.3 !important;
`

const SimpleCardContent = ({ title, content, ...props }) => (
  <Wrapper {...props}>
    <Heading className="title" level={3}>{title}</Heading>
    <StyledParagraph>{content}</StyledParagraph>
  </Wrapper>
)

SimpleCardContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default SimpleCardContent
