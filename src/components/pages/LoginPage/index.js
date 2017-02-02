import React from 'react'
import { FormattedMessage } from 'react-intl'

import { MainLayout, Link } from 'components'

const LoginPage = (props) => (
  <MainLayout {...props}>
    <p>Page</p>
    <Link href='/valide-project'><FormattedMessage id="project.submit_button" /></Link>
  </MainLayout>
)

export default LoginPage
