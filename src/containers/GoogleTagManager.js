import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mocking, google } from 'config'
import { fromContext } from 'store/selectors'

import GoogleTagManager from 'components/GoogleTagManager'

const GoogleTagManagerContainer = ({ country }) => {
  if (mocking) {
    window.dataLayer = []
    return null
  }

  return <GoogleTagManager gtmId={google.tagManagerId[country]} />
}

GoogleTagManagerContainer.propTypes = {
  country: PropTypes.string,
}

const mapStateToProps = state => ({ country: fromContext.getCountry(state) })

export default connect(mapStateToProps)(GoogleTagManagerContainer)
