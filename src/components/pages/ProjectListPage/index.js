import React from 'react'

import { MainLayout, MainWrapper, InnerWrapper } from 'components'
import { ProjectList } from 'containers'

const ProjectListPage = () => (
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
        <ProjectList />
      </InnerWrapper>
    </MainWrapper>
  </MainLayout>
)

export default ProjectListPage
