import React from 'react'

import { ProjectElaborationLayout } from 'components'
import { ProjectElaboration } from 'containers'

const ProjectElaborationPage = props => (
  <ProjectElaborationLayout {...props}>
    <ProjectElaboration />
  </ProjectElaborationLayout>
)

export default ProjectElaborationPage
