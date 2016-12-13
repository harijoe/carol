import React from 'react'
import { FormattedMessage } from 'react-intl'

import { PageTemplate, Header, Footer } from 'components'

const HelpPage = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <p><FormattedMessage id="help" /></p>
  </PageTemplate>
)

export default HelpPage
