import React from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { MainLayout, MainWrapper, Paragraph } from 'components'

const StyledParagraph = styled(Paragraph)`
  min-height: 500px;
  padding-top: ${theme('spaces.xxl')};
  text-align: center;
`

const SearchResultPage = () => (
  <MainLayout>
    <MainWrapper>
      <StyledParagraph>Blank Search Result Page</StyledParagraph>
    </MainWrapper>
  </MainLayout>
)

export default SearchResultPage
