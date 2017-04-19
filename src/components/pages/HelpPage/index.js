import React from 'react'
import { FormattedMessage } from 'react-intl'

import { MainLayout } from 'components'

const HelpPage = props => (
  <MainLayout {...props} >
    <FormattedMessage id="help" tagName="p" />
  </MainLayout>
)

export default HelpPage
