/* This component is not used anywhere for now but it would be later */
import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { Image, List } from 'components'

const renderList = items =>
  items
    ? <List>
        {items.map((item, i) =>
          <li key={item['@id'] || i}>
            {item.name || item}
          </li>,
        )}
      </List>
    : null

const FirmFull = ({ logoUrl, name, postalCode, city, countryCode, registrationNumber, description, websiteUrl, employeesNumber, clientSince, certificates, budget, delay, conviviality, globalRating, globalRatingCount, servedAreaCities }) =>
  <List>
    <li>
      <FormattedMessage id="firm.details.logo" />:{' '}
      {logoUrl ? <Image src={logoUrl} /> : <FormattedMessage id="firm.details.logo_missing" />}
    </li>
    <li>
      <FormattedMessage id="firm.details.name" />: {name}
    </li>
    <li>
      <FormattedMessage id="firm.details.postal_code" />: {postalCode}
    </li>
    <li>
      <FormattedMessage id="firm.details.city" />: {city}
    </li>
    <li>
      <FormattedMessage id="firm.details.country" />: {countryCode}
    </li>
    <li>
      <FormattedMessage id="firm.details.registration_number" />: {registrationNumber}
    </li>
    <li>
      <FormattedMessage id="firm.details.description" />: {description}
    </li>
    <li>
      <FormattedMessage id="firm.details.website" />:{' '}
      {websiteUrl
        ? <a href={websiteUrl} rel="nofollow">
            {websiteUrl}
          </a>
        : <FormattedMessage id="firm.details.website_missing" />}
    </li>
    <li>
      <FormattedMessage id="firm.details.employees_number" />: {employeesNumber}
    </li>
    <li>
      <FormattedMessage id="firm.details.client_since" />: {clientSince}
    </li>
    <li>
      <FormattedMessage id="firm.details.certificate" />: {renderList(certificates)}
    </li>
    <li>
      <FormattedMessage id="firm.details.budget" />: {budget}
    </li>
    <li>
      <FormattedMessage id="firm.details.delay" />: {delay}
    </li>
    <li>
      <FormattedMessage id="firm.details.conviviality" />: {conviviality}
    </li>
    <li>
      <FormattedMessage id="firm.details.notation" />:{' '}
      {globalRating && globalRatingCount ? globalRating / globalRatingCount : ''}
    </li>
    <li>
      <FormattedMessage id="firm.details.served_area_cities" />: {renderList(servedAreaCities)}
    </li>
  </List>

FirmFull.propTypes = {
  name: PropTypes.string,
  logoUrl: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  countryCode: PropTypes.string,
  registrationNumber: PropTypes.string,
  description: PropTypes.string,
  websiteUrl: PropTypes.string,
  employeesNumber: PropTypes.string,
  clientSince: PropTypes.string,
  certificates: PropTypes.array,
  budget: PropTypes.string,
  delay: PropTypes.string,
  conviviality: PropTypes.string,
  globalRating: PropTypes.number,
  globalRatingCount: PropTypes.number,
  servedAreaCities: PropTypes.array,
}

export default FirmFull
