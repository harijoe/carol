import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import messages from 'utils/messages'

import { Section, List, Col, Row, FooterAdvicesListItem } from 'components'

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

const FooterAdvices = ({ locale, intl: { formatMessage } }) => (
  <StyledSection dark title={formatMessage(messages('footer.advices.section_title').label)} >
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
)

FooterAdvices.propTypes = {
  intl: intlShape.isRequired,
  locale: PropTypes.string,
}

export default injectIntl(FooterAdvices)
