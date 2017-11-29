import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromProject, fromStatus } from 'store/selectors'
import { projectList, PROJECT_LIST } from 'store/actions'

import Projects from 'components/Projects'

class ProjectsContainer extends Component {
  static propTypes = {
    request: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return <Projects {...this.props} />
  }
}

const mapStateToProps = state => ({
  list: fromProject.getList(state),
  loading: fromStatus.isLoading(state, PROJECT_LIST.prefix),
})

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(projectList.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
