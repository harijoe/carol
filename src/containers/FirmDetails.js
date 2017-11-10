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
    request: PropTypes.func.isRequired,
    locale: PropTypes.string,
  }

  componentWillMount() {
    this.props.request()
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

const mapStateToProps = (state, { id }) => ({
  details: fromFirm.getDetails(state, id),
  loading: fromStatus.isLoading(state, FIRM_DETAILS.prefix),
  locale: fromContext.getLocale(state),
  mapEnabled: fromContext.getLang(state) === 'fr',
  teamEnabled: fromContext.isFeatureEnabled(state, 'pro-page-team'),
  reviewsEnabled: fromContext.isFeatureEnabled(state, 'pro-page-reviews'),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  request: () => {
    dispatch(firmDetails.request(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FirmDetailsContainer)
