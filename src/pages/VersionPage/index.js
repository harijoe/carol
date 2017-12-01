import React from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'
import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import Section from 'components/Section'

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
        {process.env.VERSION && <h1>v{process.env.VERSION}</h1>}
        {process.env.GIT_SHA1 && <p>Git SHA1: {process.env.GIT_SHA1}</p>}
        {process.env.REACT_APP_TARGET && <p>Target: {process.env.REACT_APP_TARGET}</p>}
      </StyledSection>
    </MainWrapper>
  </MainLayout>

export default VersionPage
