/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react'
import { IntlProvider, intlShape } from 'react-intl'
import { mount, shallow } from 'enzyme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({ locale: 'en', message: 'en' }, {})
const { intl } = intlProvider.getChildContext()

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
const nodeWithIntlProp = (node) => {
  return React.cloneElement(node, { intl })
}

export function shallowWithContext(node) {
  const muiTheme = getMuiTheme()

  return shallow(nodeWithIntlProp(node), {
    context: { intl, muiTheme }
  })
}

const mountWithContext = (node) => {
  const muiTheme = getMuiTheme()

  return mount(nodeWithIntlProp(node), {
    context: { intl, muiTheme },
    childContextTypes: { intl: intlShape, muiTheme: React.PropTypes.object }
  })
}

export default mountWithContext
