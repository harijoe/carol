import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { MainLayout, Link } from 'components'
import { FirmList } from 'containers'

const FirmListPage = ({ params: { projectId } }) => (
  <MainLayout>
    <FirmList {...{ projectId }} />
    <Link to={`/projects/${projectId}/account`}><FormattedMessage id="project.validate_link" /></Link>
  </MainLayout>
)

FirmListPage.propTypes = {
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default FirmListPage
