import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'

import { PageTemplate, Header, Footer, Link } from 'components'
import { FirmList } from 'containers'

const FirmListPage = props => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <FirmList
      filters={{ homeImprovementId: props.location.query.homeImprovementId, servedAreaCityCode: props.location.query.servedAreaCityCode }}
    />
    <Link to="/submit-project"><FormattedMessage id="project.validate_link" /></Link>
  </PageTemplate>
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
