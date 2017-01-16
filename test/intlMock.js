import React from 'react'
import { IntlProvider } from 'react-intl'

import { messages } from '../src/translations/en'

const mockIntl = node => {
  return (
    <IntlProvider locale='en' messages={messages}>{node}</IntlProvider>
  )
}

export default mockIntl
