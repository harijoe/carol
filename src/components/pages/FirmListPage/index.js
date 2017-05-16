import React from 'react'
import PropTypes from 'prop-types'

import { MainLayout, MainWrapper } from 'components'

import { FirmList, FirmAcceptButton } from 'containers'

const FirmListPage = ({ params: { projectId } }) => (
  <MainLayout>
    <MainWrapper>
      <FirmList {...{ projectId }} />
      <FirmAcceptButton projectId={projectId} />
    </MainWrapper>
  </MainLayout>
)

FirmListPage.propTypes = {
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default FirmListPage
