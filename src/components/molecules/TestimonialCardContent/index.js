import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Heading, Paragraph, Image, Link } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: ${theme('spaces.m')} ${theme('spaces.m')} 0 ${theme('spaces.m')};

  ${breakpoint('m')`
    padding: ${theme('spaces.l')} ${theme('spaces.l')} 0 ${theme('spaces.l')};
  `}
`
const CardFooter = styled.footer`
  padding: ${theme('spaces.m')};

  ${breakpoint('m')`
    padding: ${theme('spaces.l')};
  `}
`
const HeaderWrapper = styled.div`
  margin-bottom: ${theme('spaces.m')};
`
const ImageWrapper = styled.div`
  height: 20rem;
  overflow: hidden;
`
const StyledImage = styled(Image)`
  overflow: hidden;
  background-size: cover;
  width: 100%;
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

const StyledParagraph = styled(Paragraph)`
  font: normal ${theme('fonts.size.base')} montserrat-light, sans-serif !important;
  line-height: 1.3 !important;
`

const TestimonialCardContent = ({ image, firstName, age, location, quote, link }) => (
  <Wrapper>
    <ImageWrapper>
      <StyledImage link={image} />
    </ImageWrapper>
    <ContentWrapper>
      <HeaderWrapper>
        <StyledHeading level={3}>
          {firstName}{', '}
          <StyledSubtitle>{age}</StyledSubtitle>
        </StyledHeading>
        <StyledLocation>{location}</StyledLocation>
      </HeaderWrapper>

      <StyledParagraph>« {quote} »</StyledParagraph>
    </ContentWrapper>
    <CardFooter>
      <Link to={link} target="_blank" highlight>
        <FormattedMessage id="testimonials.read_it" />
      </Link>
    </CardFooter>
  </Wrapper>
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
