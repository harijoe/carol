import React from 'react'
import PropTypes from 'prop-types'

import { MainLayout } from 'components'
import { FirmDetails } from 'containers'

const FirmPage = props =>
  <MainLayout>
    <FirmDetails id={props.params.firmId} />
  </MainLayout>

FirmPage.propTypes = {
  params: PropTypes.shape({
    firmId: PropTypes.string,
  }),
}

export default FirmPage
