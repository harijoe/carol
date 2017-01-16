import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromFirm, fromStatus } from 'store/selectors'
import { firmList, FIRM_LIST } from 'store/actions'

import { FirmList } from 'components'

class FirmListContainer extends Component {
  static propTypes = {
    list: PropTypes.array,
    filters: PropTypes.shape({
      trade: PropTypes.string,
      workingCityCode: PropTypes.string,
    }),
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { trade, workingCityCode } = this.props.filters
    const queryParams = []

    if (trade) { queryParams.push(`trade=${trade}`) }
    if (workingCityCode) { queryParams.push(`working-city-code=${workingCityCode}`) }

    this.props.request(queryParams)
  }

  render() {
    const { list, loading } = this.props

    return <FirmList {...{ list, loading }} />
  }
}

const mapStateToProps = state => ({
  list: fromFirm.getList(state),
  loading: fromStatus.isLoading(state, FIRM_LIST),
})

const mapDispatchToProps = dispatch => ({
  request: params => dispatch(firmList.request(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FirmListContainer)
