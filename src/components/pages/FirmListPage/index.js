import React, { PropTypes } from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { FirmList } from 'containers'

const FirmListPage = props => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <FirmList
      filters={{ homeImprovementId: props.location.query.homeImprovementId, servedAreaCityCode: props.location.query.servedAreaCityCode }}
    />
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
