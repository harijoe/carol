import React from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper as googleApiWrapper } from 'google-maps-react'
import config from '../../config'
import style from './style'

class GoogleMap extends React.Component {
  constructor(props) {
    super(props)

    this.onMapClick = this.onMapClick.bind(this)
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this)

    this.state = {
      initialCenter: {
        FR: {
          lat: 46.938698,
          lng: 2.399887
        },
        GB: {
          lat: 54.355481,
          lng: -2.278986
        },
        ES: {
          lat: 40.481755,
          lng: -3.761941
        }
      },
      selectedPlace: {
        name: 'default'
      }
    }
  }

  onMarkerClick(props, marker) {
    this.setState({
      selectedPlace: {
        name: marker.name
      }
    })
  }

  onInfoWindowClose() {
    // TODO: do something
  }

  onMapClick() {
    // TODO: do something
  }

  render() {
    return (
      <div>
        <Map
          google={window.google}
          initialCenter={this.state.initialCenter[this.props.country]}
          zoom={5}
          containerStyle={style.map}
          onClick={this.onMapClick}
        >
          {this.props.markers.map((marker) => {
            return (
              <Marker
                key={marker.key}
                name={marker.key}
                position={{ lat: marker.position.lat, lng: marker.position.lng }}
                onClick={this.onMarkerClick}
              />
            )
          })}

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

GoogleMap.propTypes = {
  markers: React.PropTypes.array,
  country: React.PropTypes.string,
  onMarkerClick: React.PropTypes.func
}

export default googleApiWrapper({ apiKey: config.googleMapsApiKey, version: 3.25 })(GoogleMap)
