import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import config from 'config'

import { CountryMenu } from 'components'
import { DropDownMenu } from 'containers'

const CountryMenuContainer = props => (
  <DropDownMenu label={config.countries[props.country.countryCode].country}>
    <CountryMenu {...props} />
  </DropDownMenu>
)

CountryMenuContainer.propTypes = {
  country: PropTypes.shape({
    countryCode: PropTypes.string,
  }),
}

const mapStateToProps = state => ({ country: state.country })

export default connect(mapStateToProps)(CountryMenuContainer)
