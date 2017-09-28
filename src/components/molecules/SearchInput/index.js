import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen, breakpoint } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { Input } from 'components'

const StyledInput = styled(Input)`
  ${({ isExpanded }) => css`
    width: 100%;
    height: 5.7rem;
    padding-left: ${theme('spaces.m')};
    padding-right: ${theme('spaces.xxl')};
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid transparent;
    outline: 0;
    margin-top: 0;
    font-size: ${theme('fonts.size.base')};
    font-weight: normal;
    line-height: 1;

    &::-ms-clear {
      display: none;
    }
 
    ${breakpoint('l')`
      width: 80rem;
      height: 7.5rem;
      padding-left: ${theme('spaces.l')};
      padding-right: ${theme('spaces.xxxl')};
    `};
  
    &:focus {
      outline: none;
    }
  
    &::placeholder {
      text-align: left;
      color: ${theme('colors.grayscale.dark')};
    }
    
    transition-property: min-height, height, width, margin, font-size, padding, border-bottom;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    
    ${ifThen(
      isExpanded,
      css`
      height: 7.5rem;
      width: calc(100% - ${theme('spaces.xl')});
      max-width: 110rem;
      margin: ${theme('spaces.xxl')} auto 0 auto;
      padding-bottom: ${theme('spaces.l')};
      padding-top: ${theme('spaces.l')};
      font-size: ${theme('fonts.size.l')};
      font-weight: bold;
      border-bottom: 1px solid ${theme('colors.primary')};

      ${breakpoint('l')`
        height: 15rem;
        width: calc(100% - ${theme('spaces.xl')} * 2);
        margin-top: ${theme('spaces.xxl')};
        padding-bottom: ${theme('spaces.xxl')};
        padding-top: ${theme('spaces.xxl')};
        font-size: ${theme('fonts.size.xxl')};
      `};

      ${breakpoint('xl')`
        width: 100%;
      `};
    `,
    )};  
  `};
`

const SearchInput = ({ translate, search, query, isExpanded }) => {
  // When not deployed, the input should always show the placeholder instead of the last query
  const value = isExpanded ? query : ''
  return <StyledInput onChange={e => search(e.target.value)} isExpanded={isExpanded} placeholder={translate('search_page.field_placeholder')} value={value} />
}

SearchInput.propTypes = {
  translate: PropTypes.func.isRequired,
  search: PropTypes.func,
  isExpanded: PropTypes.bool,
  query: PropTypes.string,
}

export default injectTranslate(SearchInput)
