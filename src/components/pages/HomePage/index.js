import React from 'react'

import { MainLayout, HowItWorks, Testimonials, TipsAndTricks, Reinsurance, LastProjects, MotionMenu } from 'components'
import { GoogleMap, FirmSearchForm, Hero } from 'containers'

const HomePage = props => (
  <MainLayout {...props}>
    <Hero />
    <FirmSearchForm />
    <GoogleMap scope="latestProjectsOnMap" />
    <LastProjects />
    <HowItWorks />
    <Testimonials />
    <TipsAndTricks />
    <Reinsurance />
    <MotionMenu />
  </MainLayout>
)

export default HomePage
