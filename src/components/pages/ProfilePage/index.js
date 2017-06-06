import React from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { MainLayout, MainWrapper } from 'components'
import { ProfileForm } from 'containers'

const StyledMainWrapper = styled(MainWrapper)`
  padding-top: 5.6rem;
  background-color: ${theme('colors.white')};
`

const ProfilePage = props => (
  <MainLayout {...props}>
    <StyledMainWrapper>
      <ProfileForm />
    </StyledMainWrapper>
  </MainLayout>
)

export default ProfilePage
