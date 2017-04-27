import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { CountryMenu } from 'components'
import { fromContext } from 'store/selectors'

const CountryMenuContainer = ({ locale, ...props }) => (
  <CountryMenu locale={locale} {...props} />
)

CountryMenuContainer.propTypes = {
  locale: PropTypes.string,
}

const mapStateToProps = state => ({ currentCountry: fromContext.getCountry(state) })

export default connect(mapStateToProps)(CountryMenuContainer)
