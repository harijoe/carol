import React from 'react'
import requireExternalLibrary from 'utils/requireExternalLibrary'
import config from 'config'
import fetchPostCodesGeoData from '../../utils/fetch-postcodes-geodata'
import { calculateBounds, createPolygonsFromGeoData } from '../../utils/polygon-utils'

class GoogleMapsInterventionArea extends React.Component {

  async componentDidMount() {
    await requireExternalLibrary(`https://maps.googleapis.com/maps/api/js?key=${config.google.mapsKey}`)
    const { google } = window
    const { postCodes } = this.props
    const uniquePostCodes = [...new Set(postCodes)]
    const postCodesGeoData = await fetchPostCodesGeoData(uniquePostCodes)
    const polygons = createPolygonsFromGeoData(postCodesGeoData)
    this.map = new google.maps.Map(
      this.mapDiv, {
        mapTypeId: google.maps.MapTypeId.RoadMap,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT,
        },
      },
    )
    this.map.fitBounds(calculateBounds(polygons))
    const polygon = new google.maps.Polygon({
      paths: polygons,
      strokeWeight: 0,
      fillColor: '#3333FE',
      fillOpacity: 0.4,
    })
    polygon.setMap(this.map)
  }

  render() {
    return (
      <div
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
        ref={ref => { this.mapDiv = ref }}
      />
    )
  }

}

export default GoogleMapsInterventionArea
