import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from '../../ui/Item'

class ContentList extends Component {
  renderList() {
    return this.props.content.map((content, i) => {
      const date = new Date(content.get('date'))

      return (
        <Item
          key={i}
          id={i}
          title={content.get('title')}
          image={content.get('image')}
          content={content.get('body')}
          date={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          active={0 === i}
        />
      )
    })
  }

  render() {
    if (!this.props.content.getIn([0, 'id'])) {
      return (<p>No content</p>)
    }

    return (
      <div>
        { this.renderList() }
      </div>
    )
  }
}

ContentList.propTypes = {
  content: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    content: state.content
  }
}

export default connect(mapStateToProps)(ContentList)
