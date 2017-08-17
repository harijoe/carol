import React from 'react'
import { IntlProvider } from 'react-intl'

import messages from '../src/i18n'

const specialProperties = [/^@@/, /^\$\$/, /^toJSON$/, /^nodeType$/]

const messagesProxyHandler = {
  get(target, name) {
    if (name in target || typeof name === 'symbol' || specialProperties.find(prop => name.match(prop))) {
      return target[name]
    }

    Object.keys(messages).forEach(locale => {
      if (name !== 'test' && !(name in messages[locale])) {
        throw new Error(`'${name}' key is missing from the '${locale}' message bundle!`)
      }
    })

    return name
  },
}

const messagesProxy = new Proxy({}, messagesProxyHandler)

const mockIntl = node =>
  <IntlProvider locale="en" messages={messagesProxy}>
    {node}
  </IntlProvider>

export default mockIntl
