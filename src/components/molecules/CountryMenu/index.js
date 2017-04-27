import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { getUrlFromLocale } from 'utils/locale'

const onChange = e => (location.href = getUrlFromLocale(e.target.value))

const generateOption = (value, name) => (
  <FormattedMessage id={name} key={value}>
    {message => <option value={value}>{message}</option>}
  </FormattedMessage>
)

const CountryMenu = ({ currentLocale, className }) => (
  <select defaultValue={currentLocale} className={className} onChange={onChange}>
    {generateOption('es_ES', 'country.spain')}
    {generateOption('fr_FR', 'country.france')}
    {generateOption('en_GB', 'country.great_britain')}
  </select>
)

CountryMenu.propTypes = {
  currentLocale: PropTypes.string,
  className: PropTypes.string,
}

export default CountryMenu
