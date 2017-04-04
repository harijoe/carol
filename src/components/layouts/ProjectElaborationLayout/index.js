import React from 'react'

import { ProjectElaborationTemplate, HeaderConversational } from 'components'

const ProjectElaborationLayout = ({ children, ...props }) => (
  <ProjectElaborationTemplate header={<HeaderConversational {...props} />}>
    {children}
  </ProjectElaborationTemplate>
)

ProjectElaborationLayout.propTypes = {
  children: React.PropTypes.any,
}

export default ProjectElaborationLayout
