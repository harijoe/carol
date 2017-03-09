import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromPost, fromLocale } from 'store/selectors'

import { Map } from 'components'

class GoogleMapContainer extends Component {
  static propTypes = {
    onMarkerClick: PropTypes.func,
    country: PropTypes.string,
  }

  constructor() {
    super()

    this.state = {
      markers: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line react/prop-types
    this.updateMarkers(nextProps.list)
  }

  updateMarkers(projects) {
    const list = []

    projects.map(project => list.push({
      position: {
        lat: parseFloat(project.latitude),
        lng: parseFloat(project.longitude),
      },
      title: 'Gio',
      trade: 'dev',
    }))

    this.setState({ markers: list })
  }

  render() {
    const { onMarkerClick, country } = this.props

    return <Map markers={this.state.markers} onMarkerClick={onMarkerClick} country={country} />
  }
}

const mapStateToProps = (state, { scope }) => ({
  list: fromPost.getList(state, scope),
  country: fromLocale.getCountry(state),
})

export default connect(mapStateToProps)(GoogleMapContainer)
