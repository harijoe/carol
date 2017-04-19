import React, { PropTypes } from 'react'

import { MainLayout } from 'components'
import { FirmDetails } from 'containers'

const FirmPage = props => (
  <MainLayout>
    <FirmDetails id={props.params.firmId} />
  </MainLayout>
)

FirmPage.propTypes = {
  params: PropTypes.shape({
    firmId: PropTypes.string,
  }),
}

export default FirmPage
