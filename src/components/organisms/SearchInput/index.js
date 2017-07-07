import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Input } from 'components'

const StyledInput = styled(Input)`
  width: 50%;
  font-size: 25px;
  border: 1px solid grey;
  background: white;
  border-radius: 25px;
  z-index: 3;

  &:focus{
    outline: none;
  }

  &::placeholder {
    text-align: center;
    color: ${theme('colors.grayscale.light')};
    font-style: italic;
  }
`

const SearchInput = ({ search }) => (
  <StyledInput onChange={e => search(e.target.value)} placeholder="What is your project?" />
)

SearchInput.propTypes = {
  search: PropTypes.func,
}

export default SearchInput
