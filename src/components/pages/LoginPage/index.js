import React from 'react'

import { MainLayout } from 'components'
import { SignInForm } from 'containers'

const LoginPage = props => (
  <MainLayout {...props}>
    <SignInForm {...props} />
  </MainLayout>
)

export default LoginPage
