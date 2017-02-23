import React from 'react'
import { FormattedMessage } from 'react-intl'
import { countries } from 'config'

import { List } from 'components'

const CountryMenu = () => (
  <List>
    <li>
      <a href={countries.FR.url}>
        <FormattedMessage id="country.france" />
      </a>
    </li>
    <li>
      <a href={countries.ES.url}>
        <FormattedMessage id="country.spain" />
      </a>
    </li>
    <li>
      <a href={countries.GB.url}>
        <FormattedMessage id="country.great_britain" />
      </a>
    </li>
  </List>
)

export default CountryMenu
