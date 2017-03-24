import React, { Component } from 'react'

import { MainLayout, HowItWorks, Testimonials, TipsAndTricks, Reinsurance, LastProjects, Hero, MotionMenu } from 'components'
import { GoogleMap, FirmSearchForm } from 'containers'

class HomePage extends Component {
  constructor() {
    super()

    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onTopicClick = this.onTopicClick.bind(this)

    this.state = {
      activeProject: 0,
      activeTopic: 'construction',
    }
  }

  onMarkerClick(id) {
    this.setState({
      activeProject: Number(id),
    })
  }

  onTopicClick(event) {
    event.preventDefault()

    this.setState({
      activeTopic: event.currentTarget.id,
    })
  }

  render() {
    return (
      <MainLayout {...this.props}>
        <Hero />
        <FirmSearchForm />
        <GoogleMap scope="latestProjectsOnMap" onMarkerClick={this.onMarkerClick} />
        <LastProjects active={this.state.activeProject} />
        <HowItWorks />
        <Testimonials active={this.state.activeTopic} />
        <TipsAndTricks />
        <Reinsurance />
        <MotionMenu />
      </MainLayout>
    )
  }
}

export default HomePage
