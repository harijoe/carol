import React from 'react'

import { MainLayout } from 'components'
import { ProfileForm } from 'containers'

const ProfilePage = props => (
  <MainLayout {...props}>
    <ProfileForm />
  </MainLayout>
)

export default ProfilePage
