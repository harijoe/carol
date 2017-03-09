import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Image, Paragraph } from 'components'

const Wrapper = styled.div`
`

const StyledImage = styled(Image)`
`

const StyledHeading = styled(Heading)`
`

const StyledParagraph = styled(Paragraph)`
`

const HowItWorksBlock = ({ imgLink, title, content }) => (
  <Wrapper>
    <StyledImage link={imgLink} />
    <StyledHeading level={3}>{title}</StyledHeading>
    <StyledParagraph>{content}</StyledParagraph>
  </Wrapper>
)

HowItWorksBlock.propTypes = {
  imgLink: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
}

export default HowItWorksBlock
