import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint } from 'utils/style'

import { Heading, Input } from 'components'

const StyledHeading = styled(Heading)`
  line-height: 1.1;
  font-family:  ${theme('fonts.family.andesLight')};

  ${breakpoint('l')`
    font-size:  ${theme('fonts.size.xxl')};
  `}

  strong {
    color: ${theme('colors.primary')};
    font-family:  ${theme('fonts.family.andesBlack')};
    font-size:  ${theme('fonts.size.xxl')};

    ${breakpoint('l')`
      display: block;
      font-size:  ${theme('fonts.size.xxxl')};
    `}
  }
`

const StyledInput = styled(Input)`
  outline: 0;
  color: inherit;
  border-bottom: 1px solid ${theme('colors.primary')};
`

const SearchTerm = ({ term, translate, search, query, ...props }) =>
  <StyledHeading level={1} {...props}>
    {translate('search_page.result_title')} <strong><StyledInput onChange={e => search(e.target.value)} value={query} /></strong>
  </StyledHeading>

SearchTerm.propTypes = {
  term: PropTypes.string,
  search: PropTypes.func,
  query: PropTypes.string,
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(SearchTerm)
