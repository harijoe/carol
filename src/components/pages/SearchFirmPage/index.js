import React, { PropTypes } from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { FirmList } from 'containers'

const FirmListPage = props => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <FirmList
      filters={{ trade: props.location.query.trade, workingCityCode: props.location.query.workingCityCode }}
    />
  </PageTemplate>
)

FirmListPage.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      trade: PropTypes.string,
      workingCityCode: PropTypes.string,
    }),
  }),
}

export default FirmListPage
