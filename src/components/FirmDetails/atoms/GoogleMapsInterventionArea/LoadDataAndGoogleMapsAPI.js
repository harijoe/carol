import React from 'react'
import PropTypes from 'prop-types'
import { google } from 'config'
import requireExternalLibrary from 'utils/requireExternalLibrary'
import { fetchPostCodesGeoData } from './geo-utils'

const loadGoogleMapsAPI = async () => {
  await requireExternalLibrary(`https://maps.googleapis.com/maps/api/js?key=${google.mapsKey}`)
}

const loadGeoData = async postCodes => {
  const uniquePostCodes = [...new Set(postCodes)]
  return fetchPostCodesGeoData(uniquePostCodes)
}

class LoadDataAndGoogleMapsAPI extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    postCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  state = {
    loaded: false,
  }

  async componentDidMount() {
    const [{ polygons, cities }] = await Promise.all([
      loadGeoData(this.props.postCodes),
      loadGoogleMapsAPI(),
    ])
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ polygons, cities, loaded: true })
  }

  render() {
    const { loaded, ...props } = this.state
    const { children } = this.props
    return loaded && children(props)
  }

}

export default LoadDataAndGoogleMapsAPI
