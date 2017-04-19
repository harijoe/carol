import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { fromFirm, fromStatus } from 'store/selectors'
import { firmDetails, FIRM_DETAILS } from 'store/actions'
import { FirmDetails } from 'components'

class FirmDetailsContainer extends Component {
  static propTypes = {
    details: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { details, loading } = this.props

    return <FirmDetails {...{ details, loading }} />
  }
}

const mapStateToProps = (state, { id }) => ({
  details: fromFirm.getDetails(state, id),
  loading: fromStatus.isLoading(state, FIRM_DETAILS.prefix),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  request: () => {
    dispatch(firmDetails.request(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FirmDetailsContainer)
