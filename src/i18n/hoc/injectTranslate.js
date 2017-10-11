import React from 'react'
import { intlShape } from 'react-intl'
import i18n from 'i18n'
import labelWithColon from './labelWithColon'

export const translateForIntl = intl => (id, values) => intl.formatMessage({ id }, values)

export const injectTranslateImpl = translateForIntlImpl => Component => {
  const InjectTranslate = (props, { intl }) => (
    <Component
      translate={translateForIntlImpl(intl)}
      labelWithColon={labelWithColon(intl)}
      rawTranslate={key => i18n[intl.locale][key]}
      {...props}
    />
  )

  InjectTranslate.contextTypes = {
    intl: intlShape,
  }

  InjectTranslate.displayName = `InjectTranslate(${Component.name})`

  return InjectTranslate
}

const injectTranslate = injectTranslateImpl(translateForIntl)

export default injectTranslate
