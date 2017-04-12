import React from 'react'

import {
  MainLayout,
  HowItWorks,
  Testimonials,
  TipsAndTricks,
  Reinsurance,
  LastProjects,
  MotionMenu,
  MainWrapper,
} from 'components'
import { Hero } from 'containers'

const HomePage = props => (
  <MainLayout {...props}>
    <Hero />
    <MainWrapper>
      <LastProjects />
      <HowItWorks />
      <Testimonials />
      <TipsAndTricks />
      <Reinsurance />
    </MainWrapper>
    <MotionMenu />
  </MainLayout>
)

export default HomePage
