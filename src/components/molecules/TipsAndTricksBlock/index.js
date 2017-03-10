import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Image } from 'components'

const Wrapper = styled.div`
`

const StyledImage = styled(Image)`
`

const StyledHeading = styled(Heading)`
`

const HowItWorksBlock = ({ header, tags, imgLink, title }) => (
  <Wrapper>
    <StyledHeading level={3}>{header}</StyledHeading>
    <StyledImage link={imgLink} />
    <StyledHeading level={2}>{title}</StyledHeading>
    {tags.map(tag => (<span>{tag}</span>))}
  </Wrapper>
)

HowItWorksBlock.propTypes = {
  header: PropTypes.string,
  tags: PropTypes.array,
  imgLink: PropTypes.string,
  title: PropTypes.string,
}

export default HowItWorksBlock
