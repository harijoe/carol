import React from 'react'

import { MainLayout, MainWrapper } from 'components'
import { FeaturesForm } from 'containers'

const FeaturesPage = props =>
  <MainLayout {...props}>
    <MainWrapper>
      <FeaturesForm />
    </MainWrapper>
  </MainLayout>

export default FeaturesPage
