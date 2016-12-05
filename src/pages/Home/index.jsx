import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import Map from '../../ui/Map'
import ContentsList from '../../containers/ContentsList'
import { fetchContents } from '../../containers/ContentsList/ducks'
import SearchPro from '../../containers/pro/SearchPro'

class Home extends Component {
  constructor() {
    super()

    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onTopicClick = this.onTopicClick.bind(this)

    this.state = {
      markers: [],
      activeProject: 0,
      activeTopic: 'construction',
    }
  }

  componentWillMount() {
    this.props.fetchContents('latestProjectsOnMap', 3, ['inspiration', 'last-project'])
    this.props.fetchContents('latestProjectsResources', 5, ['work-resources'])
    this.props.fetchContents('reinsuranceArticles', 3, ['quotatis-reinsurance'])
    this.props.fetchContents('testimonialArticles', 10, ['testimony'])
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contents && nextProps.contents.get('latestProjectsOnMap')) {
      this.updateMarkers(nextProps.contents.get('latestProjectsOnMap'))
    }
  }

  onMarkerClick(props) {
    this.setState({
      activeProject: props.id,
    })
  }

  onTopicClick(event) {
    event.preventDefault()

    this.setState({
      activeTopic: event.currentTarget.id,
    })
  }

  updateMarkers(projects) {
    const list = []

    projects.map((project) => {
      return list.push({
        position: {
          lat: parseFloat(project.get('latitude')),
          lng: parseFloat(project.get('longitude')),
        },
        title: project.get('title'),
      })
    })

    this.setState({ markers: list })
  }

  render() {
    return (
      <div>
        <SearchPro />
        <Map
          markers={this.state.markers}
          onMarkerClick={this.onMarkerClick}
        />
        <ContentsList
          items={this.props.contents.get('latestProjectsOnMap')}
          active={this.state.activeProject}
        />
        <ContentsList
          items={this.props.contents.get('latestProjectsResources')}
        />
        <ul>
          <li><a href="" id="construction" onClick={this.onTopicClick}><FormattedMessage id="construction" /></a></li>
          <li><a href="" id="renovation" onClick={this.onTopicClick}><FormattedMessage id="renovation" /></a></li>
          <li><a href="" id="fixing" onClick={this.onTopicClick}><FormattedMessage id="fixing" /></a></li>
        </ul>
        <ContentsList
          items={this.props.contents.get('testimonialArticles')}
          active={this.state.activeTopic}
        />
        <ContentsList
          items={this.props.contents.get('reinsuranceArticles')}
          active="quotatis-reinsurance"
        />
      </div>
    )
  }
}

Home.propTypes = {
  contents: React.PropTypes.shape({
    latestProjectsOnMap: React.PropTypes.object,
    latestProjectsResources: React.PropTypes.object,
    testimonialArticles: React.PropTypes.object,
    reinsuranceArticles: React.PropTypes.object,
    get: React.PropTypes.func
  }),
  fetchContents: React.PropTypes.func.isRequired,
}


const mapStateToProps = (state) => {
  return {
    contents: state.contents,
  }
}

export default connect(mapStateToProps, {
  fetchContents,
})(Home)
