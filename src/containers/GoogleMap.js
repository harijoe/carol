import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromPost } from 'store/selectors'

import { GoogleMap } from 'components'

class GoogleMapContainer extends Component {
  static propTypes = {
    onMarkerClick: PropTypes.func,
  }

  constructor() {
    super()

    this.state = {
      markers: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updateMarkers(nextProps.list)
  }

  updateMarkers(projects) {
    const list = []

    projects.map(project => list.push({
      position: {
        lat: parseFloat(project.get('latitude')),
        lng: parseFloat(project.get('longitude')),
      },
      title: project.get('title'),
    }))

    this.setState({ markers: list })
  }

  render() {
    return <GoogleMap markers={this.state.markers} onMarkerClick={this.props.onMarkerClick} />
  }
}

const mapStateToProps = (state, { scope }) => ({
  list: fromPost.getList(state, scope),
})

export default connect(mapStateToProps)(GoogleMapContainer)
