import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromProject, fromStatus } from 'store/selectors'
import { projectList, PROJECT_LIST } from 'store/actions'

import { ProjectList } from 'components'

class ProjectListContainer extends Component {
  static propTypes = {
    list: PropTypes.array,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { list, loading } = this.props

    return <ProjectList {...{ list, loading }} />
  }
}

const mapStateToProps = state => ({
  list: fromProject.getList(state),
  loading: fromStatus.isLoading(state, PROJECT_LIST.prefix),
})

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(projectList.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer)
