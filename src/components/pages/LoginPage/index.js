import React from 'react'
import { FormattedMessage } from 'react-intl'

import { PageTemplate, Header, Footer, Link } from 'components'

const LoginPage = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <p>Page</p>
    <Link href='/valide-project'><FormattedMessage id="project.submit_button" /></Link>
  </PageTemplate>
)

export default LoginPage
