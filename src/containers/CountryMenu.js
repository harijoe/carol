import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import config from 'config'

import { CountryMenu } from 'components'
import { DropDownMenu } from 'containers'
import { fromContext } from 'store/selectors'

const CountryMenuContainer = ({ locale, ...props }) => (
  <DropDownMenu label={config.locales[locale].countryLabel}>
    <CountryMenu {...props} locale={locale} />
  </DropDownMenu>
)

CountryMenuContainer.propTypes = {
  locale: PropTypes.string,
}

const mapStateToProps = state => ({ locale: fromContext.getLocale(state) })

export default connect(mapStateToProps)(CountryMenuContainer)
