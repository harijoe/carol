import React, { PropTypes } from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { FirmDetails } from 'containers'

const FirmPage = props => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <FirmDetails id={props.params.firmId} />
  </PageTemplate>
)

FirmPage.propTypes = {
  params: PropTypes.shape({
    firmId: PropTypes.string,
  }),
}

export default FirmPage
