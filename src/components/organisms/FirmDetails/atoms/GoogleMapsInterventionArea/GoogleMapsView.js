import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import { calculateBounds } from './geo-utils'
import GoogleMapsPlaceholder from './GoogleMapsPlaceholder'
import mapStyles from './map-styles'

class GoogleMapsView extends React.Component {
  static propTypes = {
    polygons: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const { google } = window
    const { polygons } = this.props

    this.map = new google.maps.Map(
      this.mapDiv, {
        styles: mapStyles,
        mapTypeId: google.maps.MapTypeId.RoadMap,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT,
        },
      },
    )

    const polygon = new google.maps.Polygon({
      paths: polygons,
      strokeWeight: 0,
      fillColor: '#3333FE',
      fillOpacity: 0.4,
    })
    polygon.setMap(this.map)

    this.repositionMap()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = debounce(() => {
    this.repositionMap()
  }, 250)

  repositionMap() {
    const { polygons } = this.props
    const { map } = this

    const bounds = calculateBounds(polygons)
    map.fitBounds(bounds)
    if (document.body.clientWidth >= 576) {
      map.panBy(90, 0)
    }
  }

  render() {
    return <GoogleMapsPlaceholder innerRef={ref => { this.mapDiv = ref }} />
  }

}

export default GoogleMapsView
