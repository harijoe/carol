import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { fromProject, fromStatus } from 'store/selectors'
import { projectDetails, PROJECT_DETAILS, setToken } from 'store/actions'
import { ProjectDetails } from 'components'

class ProjectDetailsContainer extends Component {
  static propTypes = {
    details: PropTypes.object,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { details, loading } = this.props

    return <ProjectDetails {...{ details, loading }} />
  }
}

const mapStateToProps = (state, { id }) => ({
  details: fromProject.getDetails(state, id),
  loading: fromStatus.isLoading(state, PROJECT_DETAILS.prefix),
})

const mapDispatchToProps = (dispatch, { id }) => ({
    // @TODO: when #191 is finished
  request: () => {
    setToken(dispatch).then(() => {
      dispatch(projectDetails.request(id))
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsContainer)
