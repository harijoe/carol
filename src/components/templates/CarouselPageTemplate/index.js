import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint, breakpointMax, mapBreakpoints } from 'utils/style'

import {
  Heading,
  Paragraph,
  ReinsuranceCarousel,
  MainWrapper,
  Row,
  Col,
} from 'components'

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

const StyledRow = styled(Row)`
  ${mapBreakpoints(() => css`
    margin: 0;
  `)}
`

const LeftCol = styled(Col)`
  ${breakpointMax('l')`
    display: none;
  `}

  ${mapBreakpoints(() => css`
    padding: 0;
  `)}
`

const RightCol = styled(Col)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${theme('spaces.xxl')};

  ${breakpoint('l')`
    padding-left: ${theme('spaces.xxl')};
    padding-right: ${theme('spaces.xxl')};
  `}

  ${mapBreakpoints(bp => css`
    padding-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}
`

const CarouselPageTemplate = ({ heading, description, children }) => (
  <MainWrapper>
    <StyledRow>
      <LeftCol l={4}>
        <ReinsuranceCarousel />
      </ LeftCol>
      <RightCol l={8} s={12}>
        <StyledHeading level={2}>{heading}</StyledHeading>
        <StyledParagraph>{description}</StyledParagraph>
        {children}
      </RightCol>
    </StyledRow>
  </MainWrapper>
)

CarouselPageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default CarouselPageTemplate
