import React, { PropTypes, Component } from 'react'
import GoogleMap from 'google-map-react'

import { google } from 'config'
import { Marker } from 'components'

const styles = {
  position: 'relative',
  width: '100%',
  height: '300px',
}

class Map extends Component {
  static propTypes = {
    initialCenter: PropTypes.object,
    zoom: PropTypes.number,
    markers: PropTypes.array,
    onMarkerClick: PropTypes.func,
    country: PropTypes.string.isRequired,
  }

  static defaultProps = {
    initialCenter: {
      FR: {
        lat: 46.938698,
        lng: 2.399887,
      },
      GB: {
        lat: 54.355481,
        lng: -2.278986,
      },
      ES: {
        lat: 40.481755,
        lng: -3.761941,
      },
    },
    zoom: 5,
  }

  render() {
    const { initialCenter, zoom, markers, onMarkerClick, country } = this.props

    return (
      <GoogleMap
        defaultCenter={initialCenter[country]}
        defaultZoom={zoom}
        style={styles}
        bootstrapURLKeys={{ key: google.mapsKey }}
        onChildClick={onMarkerClick}
      >
        {markers.map((marker, i) => (
          <Marker
            key={i}
            lat={marker.position.lat}
            lng={marker.position.lng}
            title={marker.title}
            trade={marker.trade}
          />
        ))}
      </GoogleMap>
    )
  }
}

export default Map
