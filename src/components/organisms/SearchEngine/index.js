import React from 'react'
import styled from 'styled-components'

import { SearchInput, SearchResults } from 'containers'

const SearchEngineWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 5vh;
  width: 100%;
  padding: 5rem;
`

const SearchEngine = () =>
  <SearchEngineWrapper>
    <SearchInput />
    <SearchResults />
  </SearchEngineWrapper>

export default SearchEngine
