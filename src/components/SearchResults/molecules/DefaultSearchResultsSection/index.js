import React from 'react'
import PropTypes from 'prop-types'
import Row from 'components/Row'
import Section from 'components/Section'
import SearchSuggestions from 'components/SearchSuggestions'
import ResultsGrid from '../../atoms/ResultsGrid'

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
