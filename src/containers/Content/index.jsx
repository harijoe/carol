import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getContent from '../../actions/content'

class Content extends Component {
  componentWillMount() {
    this.props.getContent()
  }

  renderList() {
    if (!this.props.content) {
      return (<p>Aucun contenu</p>)
    }

    return this.props.content.map((content) => {
      return (
        <article key={content.id}>
          <h1>{content.title}</h1>
          <p className="body">{content.body}</p>
        </article>
      )
    })
  }

  render() {
    return (
      <div className="content">
        {this.renderList()}
      </div>
    )
  }
}

Content.propTypes = {
  content: React.PropTypes.array,
  getContent: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    content: state.content
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getContent }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Content)
