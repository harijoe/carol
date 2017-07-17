import React from 'react'
import { intlShape } from 'react-intl'

const injectTranslate = (Component) => {
  const InjectTranslate = (props, { intl }) =>
    <Component translate={(id, ...values) => intl.formatMessage({ id, values })} {...props} />

  InjectTranslate.contextTypes = {
    intl: intlShape,
  }

  InjectTranslate.displayName = `InjectTranslate(${Component.name})`

  return InjectTranslate
}

export default injectTranslate
