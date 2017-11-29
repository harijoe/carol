import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CountryMenu from 'components/CountryMenu'
import { fromContext } from 'store/selectors'

const CountryMenuContainer = props => <CountryMenu {...props} />

CountryMenuContainer.propTypes = {
  locale: PropTypes.string,
}

const mapStateToProps = state => ({ currentLocale: fromContext.getLocale(state) })

export default connect(mapStateToProps)(CountryMenuContainer)
