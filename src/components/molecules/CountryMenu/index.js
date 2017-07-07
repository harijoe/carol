import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { getUrlFromLocale } from 'utils/locale'
import { port, ssl } from 'config'

const homePageUrl = (locale) => {
  const standardPortUsed = (ssl.enabled && port === 443) || (!ssl.enabled && port === 80)

  return getUrlFromLocale(locale)
    .replace(/https?/, ssl.enabled ? 'https' : 'http')
    .replace(/(:\d+)?$/, standardPortUsed ? '' : `:${port}`)
}

const CountryOption = ({ name, value }) =>
  <FormattedMessage id={name} key={value}>
    {message => <option value={value}>{message}</option>}
  </FormattedMessage>

CountryOption.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const CountryMenu = ({ currentLocale, className }) =>
  <select defaultValue={currentLocale} className={className} onChange={(e) => { location.href = homePageUrl(e.target.value) }}>
    <CountryOption name="country.spain" value="es_ES" />
    <CountryOption name="country.france" value="fr_FR" />
    <CountryOption name="country.great_britain" value="en_GB" />
  </select>

CountryMenu.propTypes = {
  currentLocale: PropTypes.string,
  className: PropTypes.string,
}

export default CountryMenu
