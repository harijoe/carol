import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './ducks'
import Item from '../../ui/Item'

class LatestProjectsResources extends Component {

  componentWillMount() {
    this.props.fetchData(['work-resources'], 5)
  }

  renderProjectsList() {
    return this.props.projects.map((project, i) => {
      return (
        <Item
          key={i}
          id={i}
          title={project.get('title')}
          image={project.get('image')}
          content={project.get('body')}
          active
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderProjectsList()}
      </div>
    )
  }
}

LatestProjectsResources.propTypes = {
  projects: React.PropTypes.object,
  fetchData: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    projects: state.latestProjectsResources
  }
}

export default connect(mapStateToProps, { fetchData })(LatestProjectsResources)
