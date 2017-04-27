import React from 'react'

import { ProjectElaborationLayout } from 'components'
import { ProjectElaboration } from 'containers'

const ProjectElaborationPage = ({ location, ...props }) => (
  <ProjectElaborationLayout {...props}>
    <ProjectElaboration {...{ location }} />
  </ProjectElaborationLayout>
)

ProjectElaborationPage.propTypes = {
  location: React.PropTypes.object.isRequired,
}

export default ProjectElaborationPage
