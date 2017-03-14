import React, { PropTypes } from 'react'
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
const StyledLabel = styled(Paragraph)`
  margin-top: ${theme('spaces.s')};
  margin-bottom: ${theme('spaces.m')};
`
const StyledLink = styled(Link)`
  margin-top: ${theme('spaces.m')};
  display: block;
`

const TestimonialCardContent = ({ imageLink, title, subtitle, label, content, link }) => (
  <div>
    <StyledImage link={imageLink} />
    <ContentWrapper>
      <HeaderWrapper>
        <StyledHeading level={3}>
          {title}{', '}
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledHeading>
        <StyledLabel>{label}</StyledLabel>
      </HeaderWrapper>
      <Paragraph>« {content} »</Paragraph>
      <StyledLink to={link}>Lire le témoignage ➔</StyledLink>
    </ContentWrapper>
  </div>
)

TestimonialCardContent.propTypes = {
  imageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default TestimonialCardContent
