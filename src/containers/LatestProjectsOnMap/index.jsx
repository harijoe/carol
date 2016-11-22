import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './ducks'
import Map from '../../ui/Map'
import Item from '../../ui/Item'

class LatestProjectsOnMap extends Component {
  constructor() {
    super()

    this.state = {
      markers: []
    }
  }

  componentWillMount() {
    this.props.fetchData(['inspiration', 'last-project'], 3)
  }

  componentWillReceiveProps(nextProps) {
    this.updateMarkers(nextProps.projects)
  }

  updateMarkers(projects) {
    const list = []

    projects.map((project) => {
      return list.push({
        position: {
          lat: parseFloat(project.get('latitude')),
          lng: parseFloat(project.get('longitude')),
        },
        title: project.get('title')
      })
    })

    this.setState({ markers: list })
  }

  renderProjectsList() {
    return this.props.projects.map((project, i) => {
      const date = new Date(project.get('date'))

      return (
        <Item
          key={i}
          id={i}
          title={project.get('title')}
          image={project.get('image')}
          content={project.get('body')}
          date={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          active={0 === i}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <Map
          markers={this.state.markers}
        />
        {this.renderProjectsList()}
      </div>
    )
  }
}

LatestProjectsOnMap.propTypes = {
  projects: React.PropTypes.object,
  fetchData: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    projects: state.latestProjectsOnMap
  }
}

export default connect(mapStateToProps, { fetchData })(LatestProjectsOnMap)
