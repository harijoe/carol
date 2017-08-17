import React from 'react'

import { MainLayout } from 'components'
import { ResetPasswordForm } from 'containers'

const ResetPasswordPage = props =>
  <MainLayout {...props}>
    <ResetPasswordForm />
  </MainLayout>

export default ResetPasswordPage
