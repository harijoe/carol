import React from 'react'
import Helmet from 'react-helmet'

import ProjectElaborationLayout from 'layouts/ProjectElaborationLayout'
import ProjectElaboration from 'containers/ProjectElaboration'

const ProjectElaborationPage = props =>
  <ProjectElaborationLayout {...props}>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <ProjectElaboration />
  </ProjectElaborationLayout>

export default ProjectElaborationPage
