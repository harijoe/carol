import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromPost, fromContext } from 'store/selectors'

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

    projects.map(({ customFields: { latitude, longitude } }) => list.push({
      position: {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      },
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
  country: fromContext.getCountry(state),
})

export default connect(mapStateToProps)(GoogleMapContainer)
