import React from 'react'
import { FormattedMessage } from 'react-intl'

import { PageTemplate, Header, Footer } from 'components'

const FavoritePage = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <FormattedMessage id="user.favorite_page" tagName="p" />
  </PageTemplate>
)

export default FavoritePage
