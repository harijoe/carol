import React from 'react'

import MainWrapper from 'components/MainWrapper'
import MainLayout from 'layouts/MainLayout'
import FeaturesForm from 'containers/FeaturesForm'

const FeaturesPage = props =>
  <MainLayout {...props}>
    <MainWrapper>
      <FeaturesForm />
    </MainWrapper>
  </MainLayout>

export default FeaturesPage
