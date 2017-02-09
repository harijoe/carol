import React from 'react'
import { FormattedMessage } from 'react-intl'

import { MainLayout } from 'components'

const SearchPage = () => (
  <MainLayout>
    <FormattedMessage id="pro.site_search" tagName="p" />
  </MainLayout>
)

export default SearchPage
