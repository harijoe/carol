import React from 'react'

import {
  MainLayout,
  MainWrapper,
  InnerWrapper,
  SearchResults,
} from 'components'

const SearchResultPage = () => (
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
        <SearchResults />
      </InnerWrapper>
    </MainWrapper>
  </MainLayout>
)

export default SearchResultPage
