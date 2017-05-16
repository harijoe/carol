import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { MainLayout, Link, MainWrapper } from 'components'
import { FirmList } from 'containers'

const FirmListPage = ({ params: { projectId } }) => (
  <MainLayout>
    <MainWrapper>
      <FirmList {...{ projectId }} />
      <Link to={`/projects/${projectId}/account`}><FormattedMessage id="project.send_to_firms" /></Link>
    </MainWrapper>
  </MainLayout>
)

FirmListPage.propTypes = {
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default FirmListPage
