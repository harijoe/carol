import React, { Component } from 'react'

import { MainLayout, HowItWorks, Testimonial, TipsAndTricks, Reinsurance, LastProjects } from 'components'
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
        <FirmSearchForm />
        <GoogleMap scope="latestProjectsOnMap" onMarkerClick={this.onMarkerClick} />
        <LastProjects />
        <HowItWorks />
        <Testimonial />
        <TipsAndTricks />
        <Reinsurance />
      </MainLayout>
    )
  }
}

/*
  @TODO: To be used as reference when wordpress will be plugged in

   <PostList scope="latestProjectsOnMap" tags={['inspiration', 'last-project']} limit={3} active={this.state.activeProject} />
   <PostList scope="latestProjectsResources" tags={['work-resources']} limit={5} active="all" />
   <List>
   <li><Link to="#" id="construction" onClick={this.onTopicClick}><FormattedMessage id="construction" /></Link></li>
   <li><Link to="#" id="renovation" onClick={this.onTopicClick}><FormattedMessage id="renovation" /></Link></li>
   <li><Link to="#" id="fixing" onClick={this.onTopicClick}><FormattedMessage id="fixing" /></Link></li>
   </List>
   <PostList scope="testimonialArticles" tags={['testimony']} limit={10} active={this.state.activeTopic} />
   <PostList scope="reinsuranceArticles" tags={['quotatis-reinsurance']} limit={3} active="quotatis-reinsurance" />
 */

export default HomePage
