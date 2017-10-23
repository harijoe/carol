import React from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'
import LoadDataAndGoogleMapsAPI from './LoadDataAndGoogleMapsAPI'
import GoogleMapsView from './GoogleMapsView'
import Legend from './Legend'
import LegendTitle from './LegendTitle'

const GoogleMapsInterventionArea = ({ postCodes, translate }) =>
  <LoadDataAndGoogleMapsAPI postCodes={postCodes}>
    {({ polygons, cities }) => {
      const topTen = cities.length > 10 ? [...cities.slice(0, 10), '...'] : cities
      return (
        <div>
          <GoogleMapsView polygons={polygons} />
          <Legend>
            <LegendTitle>{translate('firm.details.served_area_cities')}</LegendTitle>
            {topTen.map(city => <div key={city}>{city}</div>)}
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
