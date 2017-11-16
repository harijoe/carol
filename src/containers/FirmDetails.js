import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromFirm, fromStatus, fromContext } from 'store/selectors'
import { firmDetails, FIRM_DETAILS } from 'store/actions'
import { Loading, FirmDetails } from 'components'

class FirmDetailsContainer extends Component {
  static propTypes = {
    details: PropTypes.object,
    loading: PropTypes.bool,
    requestFirmDetails: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestFirmDetails()
  }

  render() {
    const { loading, ...props } = this.props
    return (
      <Loading loading={loading || !props.details}>
        <FirmDetails {...props} />
      </Loading>
    )
  }
}

const idToIRI = id => `/firms/${id}`

export default connect(
  (state, { id }) => ({
    details: fromFirm.getDetails(state, idToIRI(id)),
    loading: fromStatus.isLoading(state, FIRM_DETAILS.prefix),
    locale: fromContext.getLocale(state),
    mapEnabled: fromContext.getLang(state) === 'fr',
    teamEnabled: fromContext.isFeatureEnabled(state, 'pro-page-team'),
    reviews: fromFirm.getReviews(state, idToIRI(id)),
  }),
  (dispatch, { id }) => ({
    requestFirmDetails: () => dispatch(firmDetails.request(idToIRI(id))),
  }),
)(FirmDetailsContainer)
