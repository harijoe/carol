import React from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { MainLayout, MainWrapper, Section } from 'components'

const StyledSection = styled(Section)`
  position: relative;
  margin-top: 1rem;
  min-height: 100vh;
  background: ${theme('colors.white')};
`

const VersionPage = props =>
  <MainLayout {...props}>
    <MainWrapper>
      <StyledSection>
        <h1>v{process.env.VERSION}</h1>
        {process.env.GIT_SHA1 && <p>Git SHA1: {process.env.GIT_SHA1}</p>}
      </StyledSection>
    </MainWrapper>
  </MainLayout>

export default VersionPage
