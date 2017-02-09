import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'

import { MainLayout, Link } from 'components'
import { FirmList } from 'containers'

const FirmListPage = props => (
  <MainLayout>
    <FirmList
      filters={{ homeImprovementId: props.location.query.homeImprovementId, servedAreaCityCode: props.location.query.servedAreaCityCode }}
    />
    <Link to="/submit-project"><FormattedMessage id="project.validate_link" /></Link>
  </MainLayout>
)

FirmListPage.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      homeImprovementId: PropTypes.string,
      servedAreaCityCode: PropTypes.string,
    }),
  }),
}

export default FirmListPage
