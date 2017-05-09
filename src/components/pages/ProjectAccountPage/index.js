import React, { PropTypes } from 'react'

import { MainLayout } from 'components'
import { ProjectAccountForm } from 'containers'

const ProjectAccountPage = ({ params: { projectId } }) => (
  <MainLayout>
    <ProjectAccountForm {...{ projectId }} />
  </MainLayout>
)

ProjectAccountPage.propTypes = {
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default ProjectAccountPage
