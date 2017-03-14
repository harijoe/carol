import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Heading, Paragraph } from 'components'

const Wrapper = styled.div`
  padding: ${theme('spaces.m')};
`

const SimpleCardContent = ({ title, content }) => (
  <Wrapper>
    <Heading level={3}>{title}</Heading>
    <Paragraph>{content}</Paragraph>
  </Wrapper>
)

SimpleCardContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default SimpleCardContent
