import React, { Component } from 'react'

import { MainLayout, HowItWorks, Testimonials, TipsAndTricks, Reinsurance, LastProjects, Hero, MotionMenu } from 'components'
import { GoogleMap, FirmSearchForm } from 'containers'

class HomePage extends Component {
  state = {
    activeProject: 0,
  }

  onMarkerClick = id => this.setState({ activeProject: Number(id) })

  render() {
    return (
      <MainLayout {...this.props}>
        <Hero />
        <FirmSearchForm />
        <GoogleMap scope="latestProjectsOnMap" onMarkerClick={this.onMarkerClick} />
        <LastProjects active={this.state.activeProject} />
        <HowItWorks />
        <Testimonials />
        <TipsAndTricks />
        <Reinsurance />
        <MotionMenu />
      </MainLayout>
    )
  }
}

export default HomePage
