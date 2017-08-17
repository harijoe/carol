import React from 'react'
import { FormattedMessage } from 'react-intl'

import { MainLayout } from 'components'

const FavoritePage = () =>
  <MainLayout>
    <FormattedMessage id="user.favorite_page" tagName="p" />
  </MainLayout>

export default FavoritePage
