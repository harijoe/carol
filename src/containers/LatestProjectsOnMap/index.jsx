import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContent } from '../ContentList/ducks'
import ContentList from '../../containers/ContentList'
import Map from '../../ui/Map'
import { getCurrentLocale, getCurrentCountry } from '../../utils/locale'

class LatestProjectsOnMap extends Component {
  constructor() {
    super()

    this.state = {
      markers: [],
      country: getCurrentCountry(),
      locale: getCurrentLocale()
    }
  }

  componentWillMount() {
    this.props.getContent(['inspiration', 'last-project'], this.state.locale)
  }

  componentWillReceiveProps(nextProps) {
    this.updateMarkers(nextProps.posts)
  }

  updateMarkers(posts) {
    const list = []

    posts.map((post) => {
      return list.push({
        position: {
          lat: parseFloat(post.get('latitude')),
          lng: parseFloat(post.get('longitude')),
        },
        key: post.get('title')
      })
    })

    this.setState({ markers: list })
  }

  render() {
    return (
      <div>
        <Map
          markers={this.state.markers}
          country={this.state.country}
        />
        <ContentList
          locale={this.state.locale}
        />
      </div>
    )
  }
}

LatestProjectsOnMap.propTypes = {
  posts: React.PropTypes.object,
  getContent: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    posts: state.content
  }
}

export default connect(mapStateToProps, { getContent })(LatestProjectsOnMap)
