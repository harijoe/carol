import React from 'react'

import { MainLayout, MainWrapper } from 'components'
import { Projects } from 'containers'

const ProjectListPage = () =>
  <MainLayout>
    <MainWrapper paddingTop="m">
      <Projects />
    </MainWrapper>
  </MainLayout>

export default ProjectListPage
