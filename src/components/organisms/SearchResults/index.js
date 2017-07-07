import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SearchResultItem } from 'components'

const SearchResultsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 46rem;
  margin-top: 17rem;
  padding-top: 10rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  z-index: 2;
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`

const SearchResults = ({ results }) => {
  if (results == null) {
    return null
  }

  return (
    <SearchResultsWrapper>
      <StyledList>
        {results.map(({ id, ...result }) => <SearchResultItem key={id} {...result} />)}
      </StyledList>
    </SearchResultsWrapper>
  )
}

SearchResults.propTypes = {
  results: PropTypes.array,
}

export default SearchResults
