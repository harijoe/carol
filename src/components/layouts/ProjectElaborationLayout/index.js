import React from 'react'
import PropTypes from 'prop-types'

import { ProjectElaborationTemplate } from 'components'
import HeaderConversational from './containers/HeaderConversational'

const ProjectElaborationLayout = ({ children, ...props }) =>
  <ProjectElaborationTemplate header={<HeaderConversational {...props} />}>
    {children}
  </ProjectElaborationTemplate>

ProjectElaborationLayout.propTypes = {
  children: PropTypes.any,
}

export default ProjectElaborationLayout
