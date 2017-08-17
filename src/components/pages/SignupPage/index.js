import React from 'react'

import { MainLayout } from 'components'
import { SignUpForm } from 'containers'

const SignupPage = props =>
  <MainLayout {...props}>
    <SignUpForm {...props} carousel />
  </MainLayout>

export default SignupPage
