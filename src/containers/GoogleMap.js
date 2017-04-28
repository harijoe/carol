import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
      show: false,
    }
  }

  componentDidMount() {
    /*
      This has two pros:
        - prevent server-side rendering of the map (which is heavy)
        - delay the map rendering on client side after the main js has been executed
     */
    window.setTimeout(() => this.setState({ show: true }))
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
    const { show } = this.state

    const result = show ? <Map markers={this.state.markers} onMarkerClick={onMarkerClick} country={country} /> : null

    return result
  }
}

const mapStateToProps = (state, { scope }) => ({
  list: fromPost.getList(state, scope),
  country: fromContext.getCountry(state),
})

export default connect(mapStateToProps)(GoogleMapContainer)
