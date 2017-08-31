import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen } from 'utils/style'

import { Input } from 'components'

const StyledInput = styled(Input)`
  ${({ isCollapse }) => css`
    width: 600px;
    height: 56px;
    background-color: transparent;
    border:0;
    border-bottom:1px solid transparent;
    outline: 0;
    margin-top:0;
    font-size: ${theme('fonts.size.base')};
    font-weight: normal;
    padding:0 1em;  
  
    &:focus{
      outline: none;
    }
  
    &::placeholder {
      text-align: left;
      color: ${theme('colors.grayscale.light')};
    }   
    
    transition-property: min-height, height, width, top, left, margin, font-size, padding, border-bottom;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    
    ${ifThen(
      isCollapse,
      css`
      margin-left: 10%;
      width: 100%;
      max-width: 110rem;
      margin: ${theme('spaces.xxxl')} auto 0 auto;
      padding: 0 0 2rem 0; 
      height: ${theme('spaces.xxxl')};
      font-size: ${theme('fonts.size.xxxl')};
      font-weight: bold;
      border-bottom: 1px solid ${theme('colors.primary')};
    `,
    )};  
  `};
`

const SearchInput = ({ search, isCollapse }) =>
  <StyledInput onChange={e => search(e.target.value)} isCollapse={isCollapse} placeholder="What is your project?" />

SearchInput.propTypes = {
  search: PropTypes.func,
  isCollapse: PropTypes.bool,
}

export default SearchInput
