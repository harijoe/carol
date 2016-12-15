import React from 'react'
import { FormattedMessage } from 'react-intl'

import { PageTemplate, Header, Footer } from 'components'

const HelpPage = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <FormattedMessage id="help" tagName="p" />
  </PageTemplate>
)

export default HelpPage
