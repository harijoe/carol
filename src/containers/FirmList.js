import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromFirm, fromStatus } from 'store/selectors'
import { firmList, FIRM_LIST } from 'store/actions'

import { FirmList } from 'components'

class FirmListContainer extends Component {
  static propTypes = {
    list: PropTypes.array,
    filters: PropTypes.shape({
      homeImprovementId: PropTypes.string,
      servedAreaCityCode: PropTypes.string,
    }),
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { homeImprovementId, servedAreaCityCode } = this.props.filters
    const queryParams = []

    if (homeImprovementId) { queryParams.push(`pro-form-id=${homeImprovementId}`) }
    if (servedAreaCityCode) { queryParams.push(`served-area-city-code=${servedAreaCityCode}`) }

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
