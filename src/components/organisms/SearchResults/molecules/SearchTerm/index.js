import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint } from 'utils/style'

import { Heading } from 'components'

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


const SearchTerm = ({ term, translate, ...props }) => (
  <StyledHeading level={1} {...props}>
    {translate('search_page.result_title')} <strong>{term}</strong>
  </StyledHeading>
)

SearchTerm.propTypes = {
  term: PropTypes.string,
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(SearchTerm)
