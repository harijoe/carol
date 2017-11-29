import React from 'react'

import MainLayout from 'layouts/MainLayout'
import SignUpForm from 'containers/SignUpForm'

const SignupPage = props =>
  <MainLayout {...props}>
    <SignUpForm {...props} carousel />
  </MainLayout>

export default SignupPage
