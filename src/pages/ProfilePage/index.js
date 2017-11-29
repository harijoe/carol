import React from 'react'

import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import ProfileForm from 'containers/ProfileForm'

const ProfilePage = props =>
  <MainLayout {...props}>
    <MainWrapper>
      <ProfileForm />
    </MainWrapper>
  </MainLayout>

export default ProfilePage
