import React from 'react'

import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import Projects from 'containers/Projects'

const ProjectListPage = () =>
  <MainLayout>
    <MainWrapper paddingTop="m">
      <Projects />
    </MainWrapper>
  </MainLayout>

export default ProjectListPage
