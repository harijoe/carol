import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen } from 'utils/style'

import { Input } from 'components'

const StyledInput = styled(Input)`
  ${({ isCollapse }) => css`
    width: 400px;
    height: 40px;
    background-color: transparent;
    border:0;
    border-bottom:1px solid transparent;
    outline: 0;
    margin-top:0;
    font-size:1em;
    font-weight: normal;
    padding:0 1em;  
  
    &:focus{
      outline: none;
    }
  
    &::placeholder {
      text-align: left;
      color: ${theme('colors.grayscale.light')};
      font-style: italic;
    }
    
    transition-property: min-height, height, width, top, left, margin, font-size, padding, border-bottom;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    
    ${ifThen(
      isCollapse,
      css`
      margin-left:10%;
      width:80%;
      margin:${theme('spaces.xxl')} 10%;
      padding:0; 
      height:80px;
      font-size:4em;
      font-weight:bold;
      border-bottom:1px solid ${theme('colors.primary')};;
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
