import React from 'react'

import MainLayout from 'layouts/MainLayout'
import ResetPasswordForm from 'containers/ResetPasswordForm'

const ResetPasswordPage = props =>
  <MainLayout {...props}>
    <ResetPasswordForm />
  </MainLayout>

export default ResetPasswordPage
