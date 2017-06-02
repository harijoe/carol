import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromFirm, fromStatus } from 'store/selectors'
import { firmList, FIRM_LIST } from 'store/actions'

import { FirmList } from 'components'

class FirmListContainer extends Component {
  static propTypes = {
    list: PropTypes.array,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
    projectId: PropTypes.string,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { list, loading, projectId } = this.props

    return <FirmList {...{ list, loading, projectId }} />
  }
}

const mapStateToProps = state => ({
  list: fromFirm.getList(state),
  loading: fromStatus.isLoading(state, FIRM_LIST.prefix),
})

const mapDispatchToProps = (dispatch, { projectId }) => ({
  request: () => dispatch(firmList.request(projectId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FirmListContainer)
