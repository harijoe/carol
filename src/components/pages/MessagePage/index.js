import React from 'react'
import { FormattedMessage } from 'react-intl'

import { MainLayout } from 'components'

const MessagePage = props =>
  <MainLayout {...props}>
    <FormattedMessage id="user.message_page" tagName="p" />
  </MainLayout>

export default MessagePage
