import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { locales } from 'config'
import { getUrlFromLocale } from 'utils/locale'

import { List, Section } from 'components'

const StyledSection = styled(Section)`
  width: 100%;
`

const CountryMenu = ({ currentCountry }) => (
  <StyledSection title={`locale: ${currentCountry}`}>
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
  </StyledSection>
)

CountryMenu.propTypes = {
  currentCountry: PropTypes.string,
}

export default CountryMenu
