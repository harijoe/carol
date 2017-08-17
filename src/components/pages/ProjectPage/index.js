import React from 'react'
import PropTypes from 'prop-types'

import { MainLayout, MainWrapper, InnerWrapper } from 'components'
import { ProjectDetails } from 'containers'

const ProjectPage = props =>
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
        <ProjectDetails id={props.params.projectId} />
      </InnerWrapper>
    </MainWrapper>
  </MainLayout>

ProjectPage.propTypes = {
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default ProjectPage
