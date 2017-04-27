import React from 'react'
import PropTypes from 'prop-types'

import { MainLayout } from 'components'
import { ProjectDetails } from 'containers'

const ProjectPage = props => (
  <MainLayout>
    <ProjectDetails id={props.params.projectId} />
  </MainLayout>
)

ProjectPage.propTypes = {
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default ProjectPage
