import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getContent from '../../actions/content'
import './content.scss'

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
          <h2>{content.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content.body }} />
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
  content: React.PropTypes.array,
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
