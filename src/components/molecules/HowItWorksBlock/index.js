import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Image, Heading } from 'components'

const Wrapper = styled.div`
  margin-bottom: ${theme('spaces.xl')};
  padding-right: ${theme('spaces.m')};
  padding-left: ${theme('spaces.m')};
`

const StyledImage = styled(Image)`
  width: 100%;
`

const HowItWorksBlock = ({ imageLink, title, content }) => (
  <Wrapper>
    <StyledImage link={imageLink} />
    <Heading level={3}>{title}</Heading>
    {content}
  </Wrapper>
)

HowItWorksBlock.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element,
}

export default HowItWorksBlock
