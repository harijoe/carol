import React from 'react'
import { FormattedMessage } from 'react-intl'

import { PageTemplate, Header, Footer } from 'components'

const SearchPage = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <p><FormattedMessage id="pro.site_search" /></p>
  </PageTemplate>
)

export default SearchPage
