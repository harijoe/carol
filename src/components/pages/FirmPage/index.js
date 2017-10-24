import React from 'react'
import PropTypes from 'prop-types'

import { MainLayout, MainWrapper } from 'components'
import { FirmDetails } from 'containers'

const FirmPage = props => (
  <MainLayout>
    <MainWrapper paddingTop="m">
      <FirmDetails id={props.params.firmId} {...props} />
    </MainWrapper>
  </MainLayout>
)

FirmPage.propTypes = {
  params: PropTypes.shape({
    firmId: PropTypes.string,
  }),
}

export default FirmPage
