import React from 'react'
import Helmet from 'react-helmet'

import { ProjectElaborationLayout } from 'components'
import { ProjectElaboration } from 'containers'

const ProjectElaborationPage = props => (
  <ProjectElaborationLayout {...props}>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <ProjectElaboration />
  </ProjectElaborationLayout>
)

export default ProjectElaborationPage
