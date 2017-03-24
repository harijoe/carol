import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Heading, Paragraph, Image, Link } from 'components'

const ContentWrapper = styled.div`
  padding: ${theme('spaces.m')};
`
const HeaderWrapper = styled.div`
  margin-bottom: ${theme('spaces.m')};
`
const StyledImage = styled(Image)`
  height: 19rem;
  max-width: 100%;
`
const StyledHeading = styled(Heading)`
  font-size: ${theme('fonts.size.xl')};
  margin-bottom: 0;
`
const StyledSubtitle = styled.span`
  font-family: ${theme('fonts.family.andesLight')};
  font-size: ${theme('fonts.size.l')};
`
const StyledLocation = styled(Paragraph)`
  margin-top: ${theme('spaces.s')};
  margin-bottom: ${theme('spaces.m')};
`
const StyledLink = styled(Link)`
  margin-top: ${theme('spaces.m')};
  display: block;
`

const TestimonialCardContent = ({ image, firstName, age, location, quote, link }) => (
  <div>
    <StyledImage link={image} />
    <ContentWrapper>
      <HeaderWrapper>
        <StyledHeading level={3}>
          {firstName}{', '}
          <StyledSubtitle>{age}</StyledSubtitle>
        </StyledHeading>
        <StyledLocation>{location}</StyledLocation>
      </HeaderWrapper>
      <Paragraph>« {quote} »</Paragraph>
      <StyledLink href={link} target="_blank">
        <FormattedMessage id="testimonials.read_it" />
      </StyledLink>
    </ContentWrapper>
  </div>
)

TestimonialCardContent.propTypes = {
  image: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default TestimonialCardContent
