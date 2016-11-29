import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './ducks'
import Item from '../../ui/Item'

class ReinsuranceArticles extends Component {

  componentWillMount() {
    this.props.fetchData(['quotatis-reinsurance'], 3)
  }

  renderArticlesList() {
    return this.props.articles.map((article, i) => {
      return (
        <Item
          key={i}
          id={i}
          title={article.get('title')}
          image={article.get('image')}
          content={article.get('body')}
          active
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderArticlesList()}
      </div>
    )
  }
}

ReinsuranceArticles.propTypes = {
  articles: React.PropTypes.object,
  fetchData: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    articles: state.reinsuranceArticles
  }
}

export default connect(mapStateToProps, { fetchData })(ReinsuranceArticles)
