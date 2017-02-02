import React from 'react'
import { IntlProvider } from 'react-intl'

import messages from '../src/translations/en'
import messagesTest from './translations'

const mockIntl = node => (
  <IntlProvider locale="en" messages={{ ...messages, ...messagesTest }}>{node}</IntlProvider>
)

export default mockIntl
