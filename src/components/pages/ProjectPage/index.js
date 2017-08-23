import React from 'react'
import PropTypes from 'prop-types'

import { MainLayout, MainWrapper } from 'components'
import { ProjectDetails } from 'containers'

const ProjectPage = props =>
  <MainLayout>
    <MainWrapper paddingTop="m">
      <ProjectDetails id={props.params.projectId} />
    </MainWrapper>
  </MainLayout>

ProjectPage.propTypes = {
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default ProjectPage
