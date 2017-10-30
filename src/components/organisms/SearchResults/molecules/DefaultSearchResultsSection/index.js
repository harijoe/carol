import React from 'react'
import PropTypes from 'prop-types'
import { Row, Section, SearchSuggestions } from 'components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import ResultsGrid from '../../atoms/ResultsGrid'
import ResultsHeading from '../../atoms/ResultsHeading'

const DefaultSearchResultsSection = ({ translate, locale }) => (
  <Section light>
    <ResultsGrid narrow>
      <Row column>
        <ResultsHeading level={3}>
          {translate('search_page.result_section_title.projects_default')}
        </ResultsHeading>
        <SearchSuggestions locale={locale} />
      </Row>
    </ResultsGrid>
  </Section>
)

DefaultSearchResultsSection.propTypes = {
  translate: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
}

export default injectTranslate(DefaultSearchResultsSection)
