import React from 'react'
import PropTypes from 'prop-types'
import { Row, Section, ResultsGrid, Heading, Paragraph } from 'components'
import styled from 'styled-components'
import { theme } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

const StyledHeading = styled(Heading)`
  font-size: ${theme('fonts.size.xxl')};
`

const SubHeading = styled(Paragraph)`
  font-family: ${theme('fonts.family.andesLight')};
  font-size: ${theme('fonts.size.xl')};
`

const NotResultsSection = ({ translate }) => (
  <Section light>
    <ResultsGrid narrow>
      <Row column>
        <StyledHeading level={3}>
          {translate('search_page.no_result_title')}
        </StyledHeading>
        <SubHeading>
          {translate('search_page.no_result_subtitle')}
        </SubHeading>
      </Row>
    </ResultsGrid>
  </Section>
)

NotResultsSection.propTypes = {
  translate: PropTypes.func,
}

export default injectTranslate(NotResultsSection)
