import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import { MainLayout, List, Link, HowItWorks, Testimonial, TipsAndTricks, Reinsurance, Hero } from 'components'
import { PostList, GoogleMap, FirmSearchForm } from 'containers'

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
        <HowItWorks />
        <Testimonial />
        <TipsAndTricks />
        <PostList scope="latestProjectsOnMap" tags={['inspiration', 'last-project']} limit={3} active={this.state.activeProject} />
        <PostList scope="latestProjectsResources" tags={['work-resources']} limit={5} active="all" />
        <List>
          <li><Link to="#" id="construction" onClick={this.onTopicClick}><FormattedMessage id="construction" /></Link></li>
          <li><Link to="#" id="renovation" onClick={this.onTopicClick}><FormattedMessage id="renovation" /></Link></li>
          <li><Link to="#" id="fixing" onClick={this.onTopicClick}><FormattedMessage id="fixing" /></Link></li>
        </List>
        <PostList scope="testimonialArticles" tags={['testimony']} limit={10} active={this.state.activeTopic} />
        <PostList scope="reinsuranceArticles" tags={['quotatis-reinsurance']} limit={3} active="quotatis-reinsurance" />
        <Reinsurance />
      </MainLayout>
    )
  }
}

export default HomePage
