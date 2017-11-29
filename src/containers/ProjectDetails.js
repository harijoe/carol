import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromProject, fromStatus } from 'store/selectors'
import { projectDetails, PROJECT_DETAILS } from 'store/actions'
import Loading from 'components/Loading'
import ProjectDetails from 'components/ProjectDetails'

class ProjectDetailsContainer extends Component {
  static propTypes = {
    project: PropTypes.object,
    placeCoords: PropTypes.object,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { project, loading, placeCoords } = this.props

    return (
      <Loading loading={loading}>
        {project && <ProjectDetails {...{ project, loading, placeCoords }} />}
      </Loading>
    )
  }
}

const mapStateToProps = (state, { id }) => {
  const project = fromProject.getDetails(state, `/projects/${id}`)
  const placeCoords = state.project.placeCoords

  return {
    project,
    placeCoords,
    loading: fromStatus.isLoading(state, PROJECT_DETAILS.prefix),
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
  request: () => dispatch(projectDetails.request(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsContainer)
