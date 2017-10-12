import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromFirm, fromStatus, fromContext } from 'store/selectors'
import { firmDetails, FIRM_DETAILS } from 'store/actions'
import { FirmDetails } from 'components'

class FirmDetailsContainer extends Component {
  static propTypes = {
    details: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
    locale: PropTypes.string,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { details, loading, locale } = this.props

    return <FirmDetails {...{ details, loading, locale }} />
  }
}

const mapStateToProps = (state, { id }) => ({
  details: fromFirm.getDetails(state, id),
  loading: fromStatus.isLoading(state, FIRM_DETAILS.prefix),
  locale: fromContext.getLocale(state),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  request: () => {
    dispatch(firmDetails.request(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FirmDetailsContainer)
