import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import {
  Heading,
  Paragraph,
  ReinsuranceCarousel,
  MainWrapper,
  Row,
  Col,
} from 'components'

const StyledMainWrapper = styled(MainWrapper)`
  background: white;
  padding-top: 5.7rem;
`

const StyledHeading = styled(Heading)`
  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xxxl')};
    margin-top: ${theme('grid.outerMargin.l')}rem;
  `}
`

const StyledParagraph = styled(Paragraph)`
  margin-top: ${theme('spaces.m')};
  margin-bottom: ${theme('spaces.xl')};
`

const LeftCol = styled(Col)`
  ${breakpointMax('m')`
    display: none;
  `}
`

const RightCol = styled(Col)`
  width: 100%;
  margin-top: ${theme('spaces.xxl')};
`

const CarouselPageTemplate = ({ heading, description, children }) => (
  <StyledMainWrapper>
    <Row>
      <LeftCol m={4}>
        <ReinsuranceCarousel />
      </LeftCol>
      <RightCol m={8} s={12}>
        <StyledHeading level={2}>{heading}</StyledHeading>
        <StyledParagraph>{description}</StyledParagraph>
        {children}
      </RightCol>
    </Row>
  </StyledMainWrapper>
)

CarouselPageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default CarouselPageTemplate
