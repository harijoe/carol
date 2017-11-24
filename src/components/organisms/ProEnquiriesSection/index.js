import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { Section, Button, Heading } from 'components'
import EnquiriesWrapper from './atoms/EnquiriesWrapper'

const StyledSection = styled(Section)`
  position: relative;
  overflow: hidden;
`

const StyledButton = styled(Button)`
  margin-bottom: 0;
`

const StyledHeading = styled(Heading)`
  color: ${theme('colors.white')};
  font-size: ${theme('fonts.size.xxl')};

  ${breakpoint('l')`
    font-size: ${theme('fonts.size.xxxl')};
  `}
`

const ResultEnquiries = styled.p`
  display: inline-block;
  padding: ${theme('spaces.m')};
  font-size: ${theme('fonts.size.l')};
  font-weight: bold;
  background-color: ${theme('colors.grayscale.darker')};
  color: ${theme('colors.white')};

  ${breakpoint('l')`
    font-size: ${theme('fonts.size.xl')};
  `}
`

const MapWrapper = styled.aside`
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  background: yellow;

  ${breakpointMax('m')`
    bottom: 0;
    height: 250px;
  `}

  ${breakpoint('m')`
    top: 0;
    max-width: 50%;
  `}

  ${breakpoint('xl')`
    max-width: calc(100% - 55rem);
  `}
`

const ProEnquiriesSection = ({ translate, nbResults }) =>
  <StyledSection primary>
    <EnquiriesWrapper>
      <StyledHeading level={2}>
        {translate('pro.enquiries_section.title')}
      </StyledHeading>
      <ResultEnquiries>
        {nbResults} {translate('pro.enquiries_section.result_label')}
      </ResultEnquiries>
      <StyledButton maxWidth>
        {translate('pro.enquiries_section.button_label')}
      </StyledButton>
    </EnquiriesWrapper>
    <MapWrapper />
  </StyledSection>

ProEnquiriesSection.propTypes = {
  translate: PropTypes.func,
  nbResults: PropTypes.number,
}

ProEnquiriesSection.defaultProps = {
  nbResults: '34',
}

export default injectTranslate(ProEnquiriesSection)
