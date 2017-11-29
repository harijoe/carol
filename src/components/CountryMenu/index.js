import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { getUrlFromLocale } from 'utils/locale'

const CountryOption = ({ name, value }) =>
  <FormattedMessage id={name} key={value}>
    {message =>
      <option value={value}>
        {message}
      </option>}
  </FormattedMessage>

CountryOption.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const CountryMenu = ({ currentLocale, className }) =>
  <select
    defaultValue={currentLocale}
    className={className}
    onChange={e => {
      location.href = (locale => getUrlFromLocale(locale))(e.target.value)
    }}
  >
    <CountryOption name="country.spain" value="es-ES" />
    <CountryOption name="country.france" value="fr-FR" />
    <CountryOption name="country.great_britain" value="en-GB" />
  </select>

CountryMenu.propTypes = {
  currentLocale: PropTypes.string,
  className: PropTypes.string,
}

export default CountryMenu
