import React from 'react'

import {
  MainLayout,
  HowItWorks,
  Testimonials,
  TipsAndTricks,
  Reinsurance,
  LastProjects,
  MotionMenu,
} from 'components'
import { Hero } from 'containers'

const HomePage = props => (
  <MainLayout {...props}>
    <Hero />
    <LastProjects />
    <HowItWorks />
    <Testimonials />
    <TipsAndTricks />
    <Reinsurance />
    <MotionMenu />
  </MainLayout>
)

export default HomePage
