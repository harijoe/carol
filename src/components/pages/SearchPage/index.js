import React from 'react'
import { FormattedMessage } from 'react-intl'

import { PageTemplate, Header, Footer } from 'components'

const SearchPage = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <FormattedMessage id="pro.site_search" tagName="p" />
  </PageTemplate>
)

export default SearchPage
