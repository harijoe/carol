import React from 'react'
import PropTypes from 'prop-types'
import { Row, Section, SearchSuggestions, ResultsGrid } from 'components'

const DefaultSearchResultsSection = ({ locale }) => (
  <Section light>
    <ResultsGrid narrow>
      <Row column>
        <SearchSuggestions locale={locale} />
      </Row>
    </ResultsGrid>
  </Section>
)

DefaultSearchResultsSection.propTypes = {
  locale: PropTypes.string.isRequired,
}

export default DefaultSearchResultsSection
