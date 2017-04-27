import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { MainLayout, Link } from 'components'
import { FirmList } from 'containers'

const FirmListPage = props => (
  <MainLayout>
    <FirmList
      filters={{ homeImprovementId: props.location.query['home-improvement-id'], servedAreaCityCode: props.location.query['served-area-city-code'] }}
    />
    <Link to="/submit-project"><FormattedMessage id="project.validate_link" /></Link>
  </MainLayout>
)

FirmListPage.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      'home-improvement-id': PropTypes.string,
      'served-area-city-code': PropTypes.string,
    }),
  }),
}

export default FirmListPage
