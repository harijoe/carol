import React from 'react'
import { FormattedMessage } from 'react-intl'
import { locales } from 'config'
import { getUrlFromLocale } from 'utils/locale'
import { List } from 'components'

const CountryMenu = () => (
  <List>
    <li>
      <a href={getUrlFromLocale(locales.fr_FR)}>
        <FormattedMessage id="country.france" />
      </a>
    </li>
    <li>
      <a href={getUrlFromLocale(locales.es_ES)}>
        <FormattedMessage id="country.spain" />
      </a>
    </li>
    <li>
      <a href={getUrlFromLocale(locales.en_GB)}>
        <FormattedMessage id="country.great_britain" />
      </a>
    </li>
  </List>
)

export default CountryMenu
