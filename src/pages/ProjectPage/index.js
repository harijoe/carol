import React from 'react'
import PropTypes from 'prop-types'

import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import ProjectDetails from 'containers/ProjectDetails'

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
