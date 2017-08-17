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

const FirmFull = items =>
  <List>
    <li>
      <FormattedMessage id="firm.details.logo" />:{' '}
      {items.logoUrl ? <Image src={items.logoUrl} /> : <FormattedMessage id="firm.details.logo_missing" />}
    </li>
    <li>
      <FormattedMessage id="firm.details.name" />: {items.name}
    </li>
    <li>
      <FormattedMessage id="firm.details.postal_code" />: {items.postalCode}
    </li>
    <li>
      <FormattedMessage id="firm.details.city" />: {items.city}
    </li>
    <li>
      <FormattedMessage id="firm.details.country" />: {items.countryCode}
    </li>
    <li>
      <FormattedMessage id="firm.details.registration_number" />: {items.registrationNumber}
    </li>
    <li>
      <FormattedMessage id="firm.details.description" />: {items.description}
    </li>
    <li>
      <FormattedMessage id="firm.details.website" />:{' '}
      {items.websiteUrl
        ? <a href={items.websiteUrl} rel="nofollow">
            {items.websiteUrl}
          </a>
        : <FormattedMessage id="firm.details.website_missing" />}
    </li>
    <li>
      <FormattedMessage id="firm.details.employees_number" />: {items.employeesNumber}
    </li>
    <li>
      <FormattedMessage id="firm.details.client_since" />: {items.clientSince}
    </li>
    <li>
      <FormattedMessage id="firm.details.certificate" />: {renderList(items.certificates)}
    </li>
    <li>
      <FormattedMessage id="firm.details.budget" />: {items.budget}
    </li>
    <li>
      <FormattedMessage id="firm.details.delay" />: {items.delay}
    </li>
    <li>
      <FormattedMessage id="firm.details.conviviality" />: {items.conviviality}
    </li>
    <li>
      <FormattedMessage id="firm.details.notation" />:{' '}
      {items.globalRating && items.globalRatingCount ? items.globalRating / items.globalRatingCount : ''}
    </li>
    <li>
      <FormattedMessage id="firm.details.served_area_cities" />: {renderList(items.servedAreaCities)}
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
  firmCertificates: PropTypes.array,
  imageUrl: PropTypes.string,
}

export default FirmFull
