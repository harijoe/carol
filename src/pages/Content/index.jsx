import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getContent } from './ducks'
import './content.scss'

class Content extends Component {
  componentWillMount() {
    this.props.getContent()
  }

  renderList() {
    if (!this.props.content.getIn([0, 'id'])) {
      return (<p>Aucun contenu</p>)
    }

    return this.props.content.map((content) => {
      return (
        <article key={content.get('id')}>
          <h2>{content.get('title')}</h2>
          <div dangerouslySetInnerHTML={{ __html: content.get('body') }} />
        </article>
      )
    })
  }

  render() {
    return (
      <div>
        { this.renderList() }
      </div>
    )
  }
}

Content.propTypes = {
  content: React.PropTypes.object,
  getContent: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    content: state.content.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getContent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
