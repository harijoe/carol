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

const HowItWorksBlock = ({ imgLink, title, content }) => (
  <Wrapper>
    <StyledImage link={imgLink} />
    <Heading level={3}>{title}</Heading>
    {content}
  </Wrapper>
)

HowItWorksBlock.propTypes = {
  imgLink: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element,
}

export default HowItWorksBlock
