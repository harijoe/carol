import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { ProjectElaborationLayout } from 'components'
import { ProjectElaboration } from 'containers'

const ProjectElaborationPage = ({ location, ...props }) => (
  <ProjectElaborationLayout {...props}>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <ProjectElaboration {...{ location }} />
  </ProjectElaborationLayout>
)

ProjectElaborationPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default ProjectElaborationPage
