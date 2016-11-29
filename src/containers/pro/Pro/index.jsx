import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'

const Pro = (props) => {
  const { pro, display } = props

  if ('pros_search_result' === display) {
    return (
      <ul>
        <li><FormattedMessage id="pro.details.name" />: {pro.get('name')}</li>
        <li><FormattedMessage id="pro.details.trade" />: {pro.get('trade')}</li>
        <li><Link to={`/artisan/${pro.get('guid')}`}><FormattedMessage id="pro.site_search.result_link" /></Link></li>
      </ul>
    )
  }

  return (
    <ul>
      <li><FormattedMessage id="pro.details.logo" />: { pro.get('logoUrl') ? <img src={pro.get('logoUrl')} alt={pro.get('name')} /> : <FormattedMessage id="pro.details.logo_missing" /> }</li>
      <li><FormattedMessage id="pro.details.name" />: {pro.get('name')}</li>
      <li><FormattedMessage id="pro.details.postal_code" />: {pro.get('postalCode')}</li>
      <li><FormattedMessage id="pro.details.city" />: {pro.get('city')}</li>
      <li><FormattedMessage id="pro.details.country" />: {pro.get('countryCode')}</li>
      <li><FormattedMessage id="pro.details.registration_number" />: {pro.get('registrationNumber')}</li>
      <li><FormattedMessage id="pro.details.description" />: {pro.get('description')}</li>
      <li><FormattedMessage id="pro.details.website" />: { pro.get('websiteUrl') ? <a href={pro.get('websiteUrl')} rel="nofollow">{pro.get('websiteUrl')}</a> : <FormattedMessage id="pro.details.website_missing" /> }</li>
      <li><FormattedMessage id="pro.details.employees_number" />: {pro.get('employeesNumber')}</li>
      <li><FormattedMessage id="pro.details.client_since" />: {pro.get('clientSince')}</li>
      <li><FormattedMessage id="pro.details.trade" />: {pro.get('trade')}</li>
    </ul>
  )
}

Pro.propTypes = {
  pro: PropTypes.shape({
    id: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string,
    postalCode: PropTypes.string,
    city: PropTypes.string,
    countryCode: PropTypes.string,
    registrationNumber: PropTypes.number,
    description: PropTypes.string,
    websiteUrl: PropTypes.string,
    employeesNumber: PropTypes.string,
    clientSince: PropTypes.string,
    trade: PropTypes.string
  }).isRequired,
  display: React.PropTypes.oneOf([
    'full_details', 'pros_search_result'
  ])
}

Pro.defaultProps = {
  display: 'full_details'
}

export default connect()(Pro)
