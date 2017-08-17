import React from 'react'

import { MainLayout, MainWrapper, InnerWrapper } from 'components'
import { Projects } from 'containers'

const ProjectListPage = () =>
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
        <Projects />
      </InnerWrapper>
    </MainWrapper>
  </MainLayout>

export default ProjectListPage
