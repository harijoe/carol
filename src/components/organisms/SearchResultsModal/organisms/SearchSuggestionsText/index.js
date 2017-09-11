import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { locales } from 'config'

import { Link } from 'components'

const Wrapper = styled.div`
  a {
    margin-left: ${theme('spaces.s')};
  }
`

const SearchSuggestionsText = ({ locale, translate }) => {

  const suggestions = locales[locale].searchSuggestions.secondary

  return(
    <Wrapper>
      {translate('search_page.see_more_projects')}
      {suggestions.map(({ title, slug }, index) =>
        <Link key={index} to={`/project-elaboration?slug=${slug}`}>{title}</Link>
      )}
    </Wrapper>
  )
}

SearchSuggestionsText.propTypes = {
  translate: PropTypes.func.isRequired,
  locale: PropTypes.string,
}

export default injectTranslate(SearchSuggestionsText)
