import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import Section from 'components/Section'
import List from 'components/List'
import Col from 'components/Col'
import Row from 'components/Row'
import FooterAdvicesListItem from '../../molecules/FooterAdvicesListItem'

const StyledRow = styled(Row)`
  width: 100%;
  color: ${theme('colors.white')};
`

const StyledList = styled(List)`
  padding: 0;
  margin: 0;
  color: ${theme('colors.white')};
  text-decoration: none;
  list-style-type: none;

  li {
    padding-top: ${theme('spaces.s')};
  }
`

const StyledCol = styled(Col)`
  ${breakpoint('m')`
    width: 25%;
  `}
`

const StyledSection = styled(Section)`
  ${breakpoint('m')`
    padding-top: ${theme('spaces.xxl')};
    padding-bottom: ${theme('spaces.xxl')};
  `}
`

const FooterAdvices = ({ locale, translate }) =>
  <StyledSection dark title={translate('footer.advices.section_title')} className="advices">
    <StyledRow>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <FooterAdvicesListItem id="column_1_1" locale={locale} />
          <FooterAdvicesListItem id="column_1_2" locale={locale} />
          <FooterAdvicesListItem id="column_1_3" locale={locale} />
        </StyledList>
      </StyledCol>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <FooterAdvicesListItem id="column_2_1" locale={locale} />
          <FooterAdvicesListItem id="column_2_2" locale={locale} />
          <FooterAdvicesListItem id="column_2_3" locale={locale} />
        </StyledList>
      </StyledCol>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <FooterAdvicesListItem id="column_3_1" locale={locale} />
          <FooterAdvicesListItem id="column_3_2" locale={locale} />
          <FooterAdvicesListItem id="column_3_3" locale={locale} />
        </StyledList>
      </StyledCol>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <FooterAdvicesListItem id="column_4_1" locale={locale} />
          <FooterAdvicesListItem id="column_4_2" locale={locale} />
          <FooterAdvicesListItem id="column_4_3" locale={locale} />
        </StyledList>
      </StyledCol>
    </StyledRow>
  </StyledSection>

FooterAdvices.propTypes = {
  translate: PropTypes.func.isRequired,
  locale: PropTypes.string,
}

export default injectTranslate(FooterAdvices)
