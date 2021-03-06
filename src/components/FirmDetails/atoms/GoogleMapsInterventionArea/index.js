import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import LoadDataAndGoogleMapsAPI from './LoadDataAndGoogleMapsAPI'
import GoogleMapsView from './GoogleMapsView'
import Legend from './Legend'

const CityLine = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
`

const GoogleMapsInterventionArea = ({ postCodes, translate }) =>
  <LoadDataAndGoogleMapsAPI postCodes={postCodes}>
    {({ polygons, cities }) => {
      const topTen = cities.length > 10 ? [...cities.slice(0, 10), '...'] : cities
      return (
        <div>
          <GoogleMapsView polygons={polygons} />
          <Legend>
            <h4>{translate('firm.details.served_area_cities')}</h4>
            {topTen.map(city => <CityLine key={city}>{city}</CityLine>)}
          </Legend>,
        </div>
      )
    }}
  </LoadDataAndGoogleMapsAPI>

GoogleMapsInterventionArea.propTypes = {
  postCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(GoogleMapsInterventionArea)
