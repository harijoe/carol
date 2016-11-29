import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { fetchData } from './ducks'
import Item from '../../ui/Item'

class TestimonialArticles extends Component {
  constructor() {
    super()

    this.onTopicClick = this.onTopicClick.bind(this)

    this.state = {
      activeTopic: 'construction'
    }
  }

  componentWillMount() {
    this.props.fetchData(['testimony'])
  }

  onTopicClick(event) {
    event.preventDefault()

    this.setState({
      activeTopic: event.currentTarget.id
    })
  }

  renderArticlesList() {
    if (!this.props.articles.getIn([0, 'title'])) {
      return (<p>Loading...</p>)
    }

    return this.props.articles.map((article, i) => {
      return (
        <Item
          key={i}
          id={i}
          title={article.get('title')}
          image={article.get('image')}
          content={article.get('body')}
          active={article.get('tags').includes(this.state.activeTopic)}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          <li><a href="" id="construction" onClick={this.onTopicClick}><FormattedMessage id="construction" /></a></li>
          <li><a href="" id="renovation" onClick={this.onTopicClick}><FormattedMessage id="renovation" /></a></li>
          <li><a href="" id="fixing" onClick={this.onTopicClick}><FormattedMessage id="fixing" /></a></li>
        </ul>
        <div>
          {this.renderArticlesList()}
        </div>
      </div>
    )
  }
}

TestimonialArticles.propTypes = {
  articles: React.PropTypes.object,
  fetchData: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    articles: state.testimonialArticles
  }
}

export default connect(mapStateToProps, { fetchData })(TestimonialArticles)
