import React, { Component } from 'react'

import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'

import { google } from 'config'
import { Marker } from 'components'

const styles = {
  position: 'relative',
  width: '100%',
  height: '100%',
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
    zoom: 8,
  }

  state = { markerVisible: false }

  fitBoundWithMarkers = ({ map, maps }) => {
    const bounds = new maps.LatLngBounds()
    const { markers } = this.props

    markers.forEach(({ position: { lat, lng } }) => bounds.extend(new maps.LatLng(lat, lng)))

    map.fitBounds(bounds)
    this.setState({ markerVisible: true })
  }

  render() {
    const { initialCenter, zoom, markers, onMarkerClick, country } = this.props
    const createMapOptions = () => ({
      styles: [
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            { hue: '#f3f4f4' }, { saturation: -84 }, { lightness: 59 }, { visibility: 'on' },
          ],
        },
        {
          featureType: 'landscape',
          elementType: 'labels',
          stylers: [
              { hue: '#ff0000' }, { saturation: -100 }, { lightness: 100 }, { visibility: 'off' },
          ],
        },
        {
          featureType: 'poi.business',
          elementType: 'labels',
          stylers: [
            { visibility: 'off' },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            { hue: '#83cead' }, { saturation: 1 }, { lightness: -15 }, { visibility: 'on' },
          ],
        },
        {
          featureType: 'poi.school',
          elementType: 'all',
          stylers: [
            { hue: '#d7e4e4' }, { saturation: -60 }, { lightness: 23 }, { visibility: 'on' },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
              { hue: '#ffffff' }, { saturation: -100 }, { lightness: 100 }, { visibility: 'on' },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
              { hue: '#bbbbbb' }, { saturation: -100 }, { lightness: 26 }, { visibility: 'on' },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            { hue: '#ffcc00' }, { saturation: 100 }, { lightness: -22 }, { visibility: 'simplified' },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
            { visibility: 'off' },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            { hue: '#ffcc00' }, { saturation: 100 }, { lightness: -35 }, { visibility: 'off' },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels',
          stylers: [
            { visibility: 'off' },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels',
          stylers: [
            { visibility: 'off' },
          ],
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            { hue: '#7fc8ed' }, { saturation: 55 }, { lightness: -6 }, { visibility: 'on' },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels',
          stylers: [
            { hue: '#7fc8ed' }, { saturation: 55 }, { lightness: -6 }, { visibility: 'off' },
          ],
        },
      ],
    })

    return (
      <GoogleMap
        onGoogleApiLoaded={this.fitBoundWithMarkers}
        defaultCenter={initialCenter[country]}
        defaultZoom={zoom}
        style={styles}
        bootstrapURLKeys={{ key: google.mapsKey }}
        onChildClick={onMarkerClick}
        options={createMapOptions}
      >
        {markers.map((marker, i) => (
          <Marker
            key={i}
            lat={marker.position.lat}
            lng={marker.position.lng}
          />
        ))}
      </GoogleMap>
    )
  }
}

export default Map
