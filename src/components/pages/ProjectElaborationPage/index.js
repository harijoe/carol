import React from 'react'
import PropTypes from 'prop-types'

import { ProjectElaborationLayout } from 'components'
import { ProjectElaboration } from 'containers'

const ProjectElaborationPage = ({ location, ...props }) => (
  <ProjectElaborationLayout {...props}>
    <ProjectElaboration {...{ location }} />
  </ProjectElaborationLayout>
)

ProjectElaborationPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default ProjectElaborationPage
