import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromProject, fromStatus } from 'store/selectors'
import { projectDetails, PROJECT_DETAILS } from 'store/actions'
import { ProjectDetails } from 'components'

class ProjectDetailsContainer extends Component {
  static propTypes = {
    project: PropTypes.object,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { project, loading } = this.props

    return <ProjectDetails {...{ project, loading }} />
  }
}

const mapStateToProps = (state, { id }) => ({
  project: fromProject.getDetails(state, `/projects/${id}`),
  loading: fromStatus.isLoading(state, PROJECT_DETAILS.prefix),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  request: () => dispatch(projectDetails.request(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsContainer)
