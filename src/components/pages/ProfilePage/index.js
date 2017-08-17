import React from 'react'

import { MainLayout, MainWrapper } from 'components'
import { ProfileForm } from 'containers'

const ProfilePage = props =>
  <MainLayout {...props}>
    <MainWrapper>
      <ProfileForm />
    </MainWrapper>
  </MainLayout>

export default ProfilePage
