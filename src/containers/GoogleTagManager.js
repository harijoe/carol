import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { google } from 'config'
import { fromContext } from 'store/selectors'

import { GoogleTagManager } from 'components'

const GoogleTagManagerContainer = ({ country }) => (
  <GoogleTagManager gtmId={google.tagManagerId[country]} />
)

GoogleTagManagerContainer.propTypes = {
  country: PropTypes.string,
}

const mapStateToProps = state => ({ country: fromContext.getCountry(state) })

export default connect(mapStateToProps)(GoogleTagManagerContainer)
