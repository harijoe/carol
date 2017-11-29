import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint } from 'utils/style'

import Heading from 'components/Heading'
import Input from 'components/Input'
import Icon from 'components/Icon'

const StyledHeading = styled(Heading)`
  position: relative;
  margin: 0;
  line-height: 1.1;
  font-family: ${theme('fonts.family.andesLight')};

  ${breakpoint('l')`
    font-size:  ${theme('fonts.size.xxl')};
  `}
`

const StyledInput = styled(Input)`
  display: block;
  font-family: ${theme('fonts.family.andesBlack')};
  font-size: ${theme('fonts.size.xxl')};
  padding-right: ${theme('spaces.xxl')};
  outline: 0;
  border-bottom: 1px solid ${theme('colors.primary')};
  color: ${theme('colors.primary')};

  ${breakpoint('l')`
    font-size: ${theme('fonts.size.xxxl')};
    padding-right: ${theme('spaces.xxxl')};
  `}

  &::-ms-clear {
    display: none;
  }
`

const StyledIcon = styled(Icon)`
  display: block;
  position: absolute;
  bottom: ${theme('spaces.l')};
  right: ${theme('spaces.m')};
  height: ${theme('icons.size.m')};
  width: ${theme('icons.size.m')};
  margin: 0;
  fill: ${theme('colors.primary')};

  ${breakpoint('l')`
    bottom: 4rem;
    right: ${theme('spaces.l')};
    height: ${theme('icons.size.xl')};
    width: ${theme('icons.size.xl')};
  `};
`

const SearchTerm = ({ term, translate, search, query, ...props }) =>
  <StyledHeading level={1} {...props}>
    {translate('search_page.result_title')} <StyledInput onChange={e => search(e.target.value)} value={query} />
    <StyledIcon icon="search" />
  </StyledHeading>

SearchTerm.propTypes = {
  term: PropTypes.string,
  search: PropTypes.func,
  query: PropTypes.string,
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(SearchTerm)
