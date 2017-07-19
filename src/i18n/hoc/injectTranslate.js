import React from 'react'
import { intlShape } from 'react-intl'

export const translateForIntl = intl => (id, values) => intl.formatMessage({ id }, values)

export const injectTranslateImpl = translateForIntlImpl => (Component) => {
  const InjectTranslate = (props, { intl }) =>
    <Component translate={translateForIntlImpl(intl)} {...props} />

  InjectTranslate.contextTypes = {
    intl: intlShape,
  }

  InjectTranslate.displayName = `InjectTranslate(${Component.name})`

  return InjectTranslate
}

const injectTranslate = injectTranslateImpl(translateForIntl)

export default injectTranslate
