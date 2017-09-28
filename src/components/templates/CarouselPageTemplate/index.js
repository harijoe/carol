import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint, breakpointMax, mapBreakpoints } from 'utils/style'

import { Heading, Paragraph, ReinsuranceCarousel, MainWrapper, Row, Col } from 'components'

const StyledHeading = styled(Heading)`
  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xxl')};
    margin-top: ${theme('grid.outerMargin.l')}rem;
  `}
`

const StyledParagraph = styled(Paragraph)`
  margin-bottom: ${theme('spaces.xl')};
  margin-top: 0;
`

const StyledRow = styled(Row)`
  ${mapBreakpoints(
    () => css`
    margin: 0;
  `,
  )}
`

const LeftCol = styled(Col)`
  background-color: ${theme('colors.grayscale.lightest')};

  ${breakpointMax('l')`
    display: none;
  `}

  ${mapBreakpoints(
    () => css`
    padding: 0;
  `,
  )}
  
  .slick-list {
    max-width: 700px;
  }
`

const RightCol = styled(Col)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${theme('spaces.xxl')};

  ${mapBreakpoints(
    bp => css`
    padding-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} + ${theme('spaces.l')});
    padding-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} + ${theme('spaces.l')});
    padding-bottom: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} + ${theme('spaces.l')});
  `,
  )}
`

const CarouselPageTemplate = ({ heading, description, children }) =>
  <MainWrapper>
    <StyledRow>
      <LeftCol l={7}>
        <ReinsuranceCarousel />
      </LeftCol>
      <RightCol l={5} s={12}>
        <StyledHeading level={2}>
          {heading}
        </StyledHeading>
        <StyledParagraph>
          {description}
        </StyledParagraph>
        {children}
      </RightCol>
    </StyledRow>
  </MainWrapper>

CarouselPageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default CarouselPageTemplate
