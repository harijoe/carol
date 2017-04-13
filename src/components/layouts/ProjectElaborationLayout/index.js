import React, { PropTypes } from 'react'

import { ProjectElaborationTemplate, HeaderConversational } from 'components'

const ProjectElaborationLayout = ({ children, ...props }) => (
  <ProjectElaborationTemplate header={<HeaderConversational {...props} />}>
    {children}
  </ProjectElaborationTemplate>
)

ProjectElaborationLayout.propTypes = {
  children: PropTypes.any,
}

export default ProjectElaborationLayout